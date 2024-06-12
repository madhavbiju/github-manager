import { useState } from "react";
import {
  ActionIcon,
  Avatar,
  Burger,
  Group,
  Menu,
  Text,
  UnstyledButton,
  rem,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import classes from "./HeaderSimple.module.css";
import {
  IconSun,
  IconMoon,
  IconChevronDown,
  IconLogout,
} from "@tabler/icons-react";
import cx from "clsx";
import { useNavigate } from "react-router-dom";

interface HeaderSimpleProps {
  opened: boolean;
  toggle: () => void;
}

export function HeaderSimple({ opened, toggle }: HeaderSimpleProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("githubToken");
    navigate("/");
  };
  const { setColorScheme } = useMantineColorScheme();
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const authTokenRaw = localStorage.getItem("githubToken");
  let userName = null;
  let avatarUrl = null;

  if (authTokenRaw !== null) {
    try {
      const authTokenObj = JSON.parse(authTokenRaw);
      userName = authTokenObj.user.name;
      avatarUrl = authTokenObj.user.avatarUrl;
    } catch (error) {
      console.error("Error parsing authToken:", error);
      // Handle parsing error
    }
  }

  return (
    <header className={classes.header}>
      <Group h="100%" px="md" className={classes.inner}>
        <Text size="lg" fw={500} c="dimmed">
          Github Manager
        </Text>
        <Group gap={10}>
          <ActionIcon
            onClick={() =>
              setColorScheme(computedColorScheme === "light" ? "dark" : "light")
            }
            variant="default"
            size="md"
            aria-label="Toggle color scheme"
          >
            <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
            <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
          </ActionIcon>
          <Menu
            width={260}
            position="bottom-end"
            transitionProps={{ transition: "pop-top-right" }}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            withinPortal
          >
            <Menu.Target>
              <UnstyledButton
                className={cx(classes.user, {
                  [classes.userActive]: userMenuOpened,
                })}
              >
                <Group gap={7}>
                  <Avatar
                    src={avatarUrl}
                    alt={avatarUrl}
                    radius="xl"
                    size={20}
                  />
                  <Text fw={500} size="sm" lh={1} mr={3}>
                    {userName}
                  </Text>
                  <IconChevronDown
                    style={{ width: rem(12), height: rem(12) }}
                    stroke={1.5}
                  />
                </Group>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
                leftSection={
                  <IconLogout
                    style={{ width: rem(16), height: rem(16) }}
                    stroke={1.5}
                  />
                }
                onClick={handleLogout}
              >
                Logout
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Group>
    </header>
  );
}

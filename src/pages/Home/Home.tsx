import {
  ActionIcon,
  AppShell,
  Burger,
  Group,
  Skeleton,
  Text,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NavbarSearch } from "../../components/Navbar/Navbar";
import RepoRoles from "../RepoRoles/RepoRoles";
import { IconSun, IconMoon } from "@tabler/icons-react";
import cx from "clsx";
import classes from "./Home.module.css";

export function BasicAppShell() {
  const [opened, { toggle }] = useDisclosure();
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text size="lg" fw={500} c="dimmed">
            Github Manager
          </Text>
        </Group>
        <ActionIcon
          onClick={() =>
            setColorScheme(computedColorScheme === "light" ? "dark" : "light")
          }
          variant="default"
          size="xl"
          aria-label="Toggle color scheme"
        >
          <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
          <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
        </ActionIcon>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <NavbarSearch />
      </AppShell.Navbar>
      <AppShell.Main>
        <RepoRoles />
      </AppShell.Main>
    </AppShell>
  );
}

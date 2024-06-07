import {
  TextInput,
  Code,
  UnstyledButton,
  Badge,
  Text,
  Group,
  ActionIcon,
  Tooltip,
  rem,
} from "@mantine/core";
import classes from "./NavbarSearch.module.css";
import { MantineLogo } from "@mantinex/mantine-logo";
import { IconSearch, IconPlus } from "@tabler/icons-react";

const collections = [
  { emoji: "👍", label: "Repo 1" },
  { emoji: "🚚", label: "Repo 2" },
  { emoji: "💸", label: "Repo 3" },
  { emoji: "💰", label: "Repo 4" },
  { emoji: "✨", label: "Repo 5" },
  { emoji: "🛒", label: "Repo 6" },
  { emoji: "📅", label: "Repo 7" },
  { emoji: "🙈", label: "Repo 8" },
  { emoji: "💁‍♀️", label: "Repo 9" },
];

export function NavbarSearch() {
  const collectionLinks = collections.map((collection) => (
    <a
      href="#"
      onClick={(event) => event.preventDefault()}
      key={collection.label}
      className={classes.collectionLink}
    >
      <span style={{ marginRight: rem(9), fontSize: rem(16) }}>
        {collection.emoji}
      </span>{" "}
      {collection.label}
    </a>
  ));

  return (
    <nav>
      <TextInput
        placeholder="Search"
        size="xs"
        leftSection={
          <IconSearch
            style={{ width: rem(12), height: rem(12) }}
            stroke={1.5}
          />
        }
        rightSectionWidth={70}
        rightSection={<Code className={classes.searchCode}>Ctrl + K</Code>}
        styles={{ section: { pointerEvents: "none" } }}
        mb="sm"
      />

      <div className={classes.section}>
        <Group className={classes.collectionsHeader} justify="space-between">
          <Text size="xs" fw={500} c="dimmed">
            Repositories
          </Text>
        </Group>
        <div className={classes.collections}>{collectionLinks}</div>
      </div>
    </nav>
  );
}

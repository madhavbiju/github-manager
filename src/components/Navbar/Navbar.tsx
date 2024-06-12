import { useState } from "react";
import { TextInput, Text, Group, rem } from "@mantine/core";
import classes from "./NavbarSearch.module.css";
import { IconSearch } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export function NavbarSearch({ repositories }: RepoProp) {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter repositories based on search term
  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const collectionLinks = filteredRepositories.map((repo) => (
    <Link // Use Link instead of 'a' tag
      to={`/dashboard/${repo.full_name}`} // Navigate to /dashboard/{full_name}
      key={repo.id}
      className={classes.collectionLink}
    >
      <span style={{ marginRight: rem(9), fontSize: rem(16) }}>{"🔧"}</span>{" "}
      {repo.name}
    </Link>
  ));

  return (
    <nav>
      <TextInput
        placeholder="Search"
        size="xs"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        leftSection={
          <IconSearch
            style={{ width: rem(12), height: rem(12) }}
            stroke={1.5}
          />
        }
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

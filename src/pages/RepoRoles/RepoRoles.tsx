import React from "react";
import { UsersTable } from "../../components/UserTable/UserTable";
import { Code, TextInput, rem, Text } from "@mantine/core";
import { IconSearch, IconPlus } from "@tabler/icons-react";
import classes from "./RepoRoles.module.css";

const RepoRoles = () => {
  return (
    <div>
      <Text size="lg" fw={500}>
        Repo Users
      </Text>
      <br></br>
      <TextInput
        placeholder="Search"
        size="xs"
        leftSection={
          <IconSearch
            style={{ width: rem(12), height: rem(12) }}
            stroke={1.5}
          />
        }
        styles={{ section: { pointerEvents: "none" } }}
        mb="sm"
      />
      <UsersTable />
    </div>
  );
};

export default RepoRoles;

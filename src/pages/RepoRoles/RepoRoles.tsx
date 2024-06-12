import React from "react";
import { UsersTable } from "../../components/UserTable/UserTable";
import { Code, TextInput, rem, Text } from "@mantine/core";
import { IconSearch, IconPlus } from "@tabler/icons-react";
import classes from "./RepoRoles.module.css";

const RepoRoles = ({ collaborators, owner, repo }: collabProp) => {
  return (
    <div>
      <Text size="lg" fw={500}>
        {owner}\{repo}
      </Text>
      <br></br>

      <UsersTable collaborators={collaborators} />
    </div>
  );
};

export default RepoRoles;

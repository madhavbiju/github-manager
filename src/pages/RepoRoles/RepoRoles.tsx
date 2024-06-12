import { UsersTable } from "../../components/UserTable/UserTable";
import { Text } from "@mantine/core";

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

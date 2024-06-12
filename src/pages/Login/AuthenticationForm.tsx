import { Text, Paper, Group } from "@mantine/core";
import { GithubButton } from "./components/GithubButton";
import classes from "./Login.module.css";

interface GitHubAuthComponentProps {
  authUrl: string;
}

export default function AuthenticationForm({
  authUrl,
}: GitHubAuthComponentProps) {
  return (
    <Paper className={classes.container} radius="md" p="xl">
      <Text size="xl" fw={500}>
        Welcome to Github Manager
      </Text>
      <br></br>
      <Text size="lg" fw={500}>
        Sign in with
      </Text>
      <Group grow mb="md" mt="md">
        <a href={authUrl} rel="noopener noreferrer">
          <GithubButton radius="xl">Github</GithubButton>
        </a>
      </Group>
    </Paper>
  );
}

import { Text, Paper, Button, Title } from "@mantine/core";
import classes from "./Login.module.css";

interface GitHubAuthComponentProps {
  authUrl: string;
}

export default function AuthenticationForm({
  authUrl,
}: GitHubAuthComponentProps) {
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={30}>
          Welcome to Github Manager
        </Title>
        <Text ta="center" mt="md">
          Sign in with Github to continue{" "}
          <a href={authUrl} rel="noopener noreferrer">
            <Button fullWidth mt="xl" size="md">
              Login
            </Button>
          </a>
        </Text>
      </Paper>
    </div>
  );
}

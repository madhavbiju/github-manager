import classes from "./ChooseRepo.module.css";
import { Image, Title } from "@mantine/core";

const ChooseRepo = () => {
  return (
    <div className={classes.container}>
      <Image
        radius="xl"
        h={200}
        w="auto"
        fit="contain"
        src="/public/norepo.png"
      />
      <Title order={2} className={classes.title} ta="center" mt="md" mb={30}>
        Choose a repo to view its collaborators
      </Title>
    </div>
  );
};

export default ChooseRepo;

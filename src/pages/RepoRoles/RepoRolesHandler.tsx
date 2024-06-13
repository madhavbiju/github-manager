import { useEffect, useState } from "react";
import { fetchCollaborators } from "./api/fetchRoles";
import { Params, useParams } from "react-router-dom";
import RepoRoles from "./RepoRoles";
import { Loader } from "@mantine/core";
import classes from "./RepoRoles.module.css";

const RepoRolesHandler = () => {
  const { owner, repo } = useParams<Params>();
  const [collaborators, setCollaborators] = useState<Collaborator[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchCollaborators(owner!, repo!);
        setCollaborators(data.data);
      } catch (error) {
        // Handle error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // Cleanup function
    return () => {
      // Cleanup code if needed
    };
  }, [repo, owner]);

  if (loading) {
    return (
      <div className={classes.container}>
        <Loader size={30} />
      </div>
    );
  }

  return (
    <RepoRoles collaborators={collaborators} owner={owner!} repo={repo!} />
  );
};

export default RepoRolesHandler;

import { useEffect, useState } from "react";
import { fetchCollaborators } from "./api/fetchRoles";
import { Params, useParams } from "react-router-dom";
import RepoRoles from "./RepoRoles";

const RepoRolesHandler = () => {
  const { owner, repo } = useParams<Params>();
  const [collaborators, setCollaborators] = useState<Collaborator[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCollaborators(owner!, repo!);
        setCollaborators(data.data);
      } catch (error) {
        // Handle error
      } finally {
      }
    };

    fetchData();
    // Cleanup function
    return () => {
      // Cleanup code if needed
    };
  }, [repo, owner]);

  return (
    <RepoRoles collaborators={collaborators} owner={owner!} repo={repo!} />
  );
};

export default RepoRolesHandler;

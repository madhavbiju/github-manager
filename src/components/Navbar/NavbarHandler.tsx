// Repositories.tsx
import React, { useEffect, useState } from "react";
import { fetchRepositories } from "./api/fetchRepoData";
import { NavbarSearch } from "./Navbar";

const NavbarHandler: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getRepositories = async () => {
      try {
        const repos = await fetchRepositories();
        setRepositories(repos);
        setLoading(false);
      } catch (error) {
        setError("error.message");
        setLoading(false);
      }
    };

    getRepositories();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <NavbarSearch repositories={repositories} />;
};

export default NavbarHandler;

import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";

type Repository = {
  id: string;
  name: string;
  description: string;
  html_url: string;
};

//https://api.github.com/users/avnerjose/repos

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/avnerjose/repos")
      .then((res) => res.json())
      .then((res) => setRepositories(res));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
    </section>
  );
}

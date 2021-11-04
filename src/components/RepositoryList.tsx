import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";
import { useEffect, useState } from "react";

const repository = {
  name: "test3e",
  description: "askldfhjaslkdj",
  link: "aksjdhfalkshflaksjhdk",
};

//https://api.github.com/users/avnerjose/repos

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

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

export function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository.name ?? "Test"}</strong>
      <p>{repository.description ?? "Description"}</p>

      <a href={repository.link ?? "fasfasdf"}>Acessar Repositório</a>
    </li>
  );
}

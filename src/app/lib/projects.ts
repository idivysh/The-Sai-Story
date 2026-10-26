
import { getGitHubRepositories } from "./github";
import projectConfig from "./projects.config";

export async function getSelectedProjects() {
  const repositories = await getGitHubRepositories();

  const selectedProjects = projectConfig
    .filter((project) => project.visible)
    .map((config) => {
      const repository = repositories.find(
        (repo) => repo.name === config.repo
      );

      if (!repository) {
        return null;
      }

      return {
        ...repository,
        title: config.title ?? repository.name,
        description: config.description ?? repository.description ?? "",
        image: config.image,
        featured: config.featured,
        order: config.order,
        homepage: repository.homepage,
      };
    })
    .filter((project) => project !== null)
    .sort((a, b) => a.order - b.order);

  return selectedProjects;
}

import { neetcode150 } from '$lib/data/dsa';
import { aptitudeCategories, mcqTopics, placementCompanies, reasoningCategories } from '$lib/data/catalogs';

// Replace these synchronous adapters with FastAPI calls without changing consuming pages.
export const catalogService = {
  dsa: () => neetcode150,
  question: (slug: string) => neetcode150.find((question) => question.slug === slug),
  companies: () => placementCompanies,
  company: (slug: string) => placementCompanies.find((company) => company.id === slug),
  aptitude: () => aptitudeCategories,
  reasoning: () => reasoningCategories,
  mcq: () => mcqTopics
};

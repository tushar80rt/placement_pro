export interface SearchItem {
  id: string;
  title: string;
  description?: string;
  category: string; // e.g., 'DSA', 'Company', 'Aptitude', etc.
  url: string; // navigation path
}

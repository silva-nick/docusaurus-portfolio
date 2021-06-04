// Other personal user data
export interface userOptions {
  fullName: string;
  links: string[];
  // TODO: bio, override github user data
}

// github repo api params
export interface repoOptions {
  type?: string;
  sort?: string;
  direction?: string;
  numRepos?: number;
}

// github repo response values
export interface repoData {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

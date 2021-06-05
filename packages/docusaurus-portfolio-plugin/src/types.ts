// Plugin options type
export interface PluginOptions {
  path: string;
  //id: string; // TODO: support multiple instances
  username: string;
  userOptions?: UserOptions;
  repoOptions?: RepoOptions;
}

// Other personal user data
export interface UserOptions {
  fullName?: string;
  links?: string[];
  // TODO: bio, override github user data
}

// github repo api params
export interface RepoOptions {
  type?: string;
  sort?: string;
  direction?: string;
  numRepos?: number;
}

// github repo response values
export interface RepoData {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

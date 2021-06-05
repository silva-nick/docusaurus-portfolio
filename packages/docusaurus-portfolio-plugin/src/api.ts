import fetch from 'node-fetch';

import { RepoOptions } from './types';

// Load a single user using:
// https://developer.github.com/v3/users/#get-a-single-user
export async function getUser(username: string) {
  try {
    let res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) {
      throw Error(res.statusText);
    }
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

// Load a user's repos:
// https://docs.github.com/en/rest/reference/repos#list-user-repositories
export async function getRepos(username: string, options: RepoOptions) {
  let repos: any[] = [];
  let page = 1;
  let otherSort: string | null = null;

  let { type, sort, direction, numRepos } = options;
  type = type || 'owner';
  sort = sort || 'full_name';
  direction = direction || 'desc';
  numRepos = numRepos || 6;
  let tempNumRepos = numRepos;

  if (['created', 'updated', 'pushed', 'full_name'].indexOf(sort) < 0) {
    let otherSortOpt = [
      'size',
      'stargazers_count',
      'watchers_count',
      'forks_count',
    ];
    if (otherSortOpt.indexOf(sort) < 0) {
      throw new Error(
        "Given sort option isn't a github repo parameter\n Check https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user",
      );
    }

    otherSort = sort;
    sort = 'created';
    tempNumRepos = 500;
  }

  let tempRepos: any[] = [];
  while (tempNumRepos > 0 && (!tempRepos.length || tempRepos.length === 100)) {
    const perPage = numRepos < 100 ? numRepos : 100;
    const url = `https://api.github.com/users/${username}/repos?type=${type}&sort=${sort}&direction=${direction}&per_page=${perPage}&page=${page}`;

    try {
      let res = await fetch(url);
      if (!res.ok) {
        throw Error(res.statusText);
      }
      tempRepos = await res.json();
    } catch (error) {
      console.log(error);
    }
    repos = tempRepos.concat(repos);

    tempNumRepos -= perPage;
    page++;
  }

  if (otherSort) {
    repos = repos
      .sort((a, b) => {
        if (direction === 'asc') {
          return a[otherSort!] - b[otherSort!];
        } else {
          return b[otherSort!] - a[otherSort!];
        }
      })
      .slice(0, Math.min(numRepos, repos.length));
  }

  return repos;
}

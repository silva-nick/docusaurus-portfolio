import fetch from 'node-fetch';

import { repoOptions } from './types';

// Load a single user using:
// https://developer.github.com/v3/users/#get-a-single-user
export async function getUser(username: string) {
  let userData;
  fetch(`https://api.github.com/users/${username}`)
    .then((res: any) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res.json();
    })
    .then((json: any) => (userData = json))
    .catch(function (error: any) {
      console.log('Error in getUser \n', error);
    });
  return userData;
}

// Load a user's repos:
// https://docs.github.com/en/rest/reference/repos#list-user-repositories
export async function getRepos(username: string, options: repoOptions) {
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
  }

  let tempRepos: any[] = [];
  while (numRepos > 0 && (!tempRepos || tempRepos.length === 100)) {
    const perPage = numRepos < 100 ? numRepos : 100;
    const url = `https://api.github.com/users/${username}/repos?type=${type}&sort=${sort}&direction=${direction}&per_page=${perPage}&page=${page}`;
    fetch(url)
      .then((res: any) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        console.log(res);
        tempRepos = res;
      })
      .catch(function (error: any) {
        console.log('Error in getUser \n', error);
      });
    repos = tempRepos.concat(repos);
  }

  if (otherSort) {
    //sort and slice repos
  }
  return repos;
}

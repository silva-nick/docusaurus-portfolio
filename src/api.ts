import fetch from "node-fetch";

import { repoOptions } from "./types";

// Load a single user using:
// https://developer.github.com/v3/users/#get-a-single-user
export async function getUser(username: string) {
  let userData;
  fetch(`https://api.github.com/users/${username}`)
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res.json();
    })
    .then((json) => (userData = json))
    .catch(function (error) {
      console.log("Error in getUser \n", error);
    });
  return userData;
}

// Load a user's repos:
// https://docs.github.com/en/rest/reference/repos#list-user-repositories
export async function getRepos(username: string, options: repoOptions) {
  let repos = [];
  let page = 1;
  let otherSort: string | null;

  let { type, sort, direction, numRepos } = options;
  type = type || "owner";
  sort = sort || "full_name";
  direction = direction || "desc";
  numRepos = numRepos || 6;
  let tempNumRepos = numRepos;

  if (["created", "updated", "pushed", "full_name"].indexOf(sort) < 0) {
    if (
      ["size", "stargazers_count", "watchers_count", "forks_count"].indexOf(
        sort
      ) < 0
    ) {
      throw new Error(
        "Given sort option isn't a github repo parameter\n Check https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user"
      );
    }
    otherSort = sort;
    sort = "created";
  }

  while (numRepos > 0) {
    let tempRepos;
    let perPage = numRepos < 100 ? numRepos : 100;
    let url = `https://api.github.com/users/${username}/repos?type=${type}&sort=${sort}&direction=${direction}`;
  }

  if (stars) {
    //sort and slice repos
  }
  return repos;
}

import { QueryResolvers } from './type-defs.graphqls';
import fetch from 'isomorphic-unfetch';
import queryString from 'query-string';

const Query: Required<QueryResolvers> = {
  async repos(_parent: any, _args: any, _context: any) {
    const searchParams = queryString.stringify({
      sort: 'stars',
      order: 'desc',
      q: `language:javascript`,
      per_page: '1',
    });

    const response = await fetch(
      `https://api.github.com/search/repositories?${searchParams}`
    );

    const responseJson = await response.json();
    const trendingRepos = responseJson.items.map(
      ({
        id,
        name,
        full_name,
        url,
        description,
        stargazers_count,
      }: {
        id: Number;
        name: String;
        full_name: String;
        url: String;
        description: String;
        stargazers_count: string;
      }) => ({
        id,
        name,
        fullName: full_name,
        url,
        description,
        stars: stargazers_count,
      })
    );

    return trendingRepos;
  },
};

export default { Query };

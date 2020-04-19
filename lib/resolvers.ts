import { QueryResolvers } from './type-defs.graphqls';
import fetch from 'isomorphic-unfetch';
import queryString from 'query-string';
import formatISO from 'date-fns/formatISO';

const Query: Required<QueryResolvers> = {
  async repos(_parent: any, _args: any, _context: any) {
    const { language, days } = _args;

    const date = new Date();
    date.setDate(date.getDate() - days);
    const createdAt = formatISO(date, { representation: 'date' });

    const searchParams = unescape(
      queryString.stringify({
        sort: 'stars',
        order: 'desc',
        q: `created:>${createdAt} language:${language}`,
        per_page: '10',
      })
    );

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

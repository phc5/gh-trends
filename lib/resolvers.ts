import { QueryResolvers } from './type-defs.graphqls';
import fetch from 'isomorphic-unfetch';
import queryString from 'query-string';
import formatISO from 'date-fns/formatISO';

const Query: Required<QueryResolvers> = {
  async repos(_parent: any, _args: any, _context: any) {
    const { language, days } = _args;

    const languageParam =
      language.toLowerCase() === 'all' ? '' : ` language:${language}`;

    const date = new Date();
    date.setDate(date.getDate() - days);
    const createdAt = formatISO(date, { representation: 'date' });

    const searchParams = unescape(
      queryString.stringify({
        sort: 'stars',
        order: 'desc',
        q: `created:>${createdAt}${languageParam}`,
        per_page: '12',
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
        description: string;
        stargazers_count: string;
      }) => {
        const trimmedDescription = description ? description.substr(0, 80) : '';

        const snippet =
          trimmedDescription.length > 0
            ? description.length < 80
              ? trimmedDescription
              : trimmedDescription.substr(
                  0,
                  Math.max(
                    trimmedDescription.lastIndexOf('.'),
                    trimmedDescription.lastIndexOf(' '),
                    trimmedDescription.lastIndexOf('?'),
                    trimmedDescription.lastIndexOf('!'),
                    trimmedDescription.lastIndexOf(',')
                  )
                ) + '...'
            : '';

        return {
          id,
          name,
          fullName: full_name,
          url,
          description: snippet,
          stars: stargazers_count,
        };
      }
    );

    return trendingRepos;
  },
};

export default { Query };

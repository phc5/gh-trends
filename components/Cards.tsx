import styled from 'styled-components';
import { useReposQuery } from '../lib/repos.graphql';

export default ({ language, days }: { language: string; days: number }) => {
  const { data } = useReposQuery({
    variables: {
      language: language,
      days: days,
    },
  });

  if (data) {
    const { repos } = data;
    const cards = repos?.map((repo: any) => (
      <StyledCard
        href={`https://github.com/${repo.fullName}`}
        target="_blank"
        rel="noopener noreferrer"
        key={repo.fullName}
      >
        <StyledCardContent>
          <StyledHeader>{repo.name}</StyledHeader>
          <StyledSubHeader>{repo.fullName}</StyledSubHeader>
          <StyleDescription>{repo.description}</StyleDescription>
        </StyledCardContent>

        <StyledStarForkContainer>
          <StyledStar>
            <span role="img" aria-label="Star">
              ⭐
            </span>
            {repo.stars.toLocaleString()}
          </StyledStar>
        </StyledStarForkContainer>
      </StyledCard>
    ));

    return <StyledCardsContainer>{cards}</StyledCardsContainer>;
  }
  return (
    <div>
      {language} {days}
    </div>
  );
};
const StyledCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(calc(25rem - 1.6rem), 1fr));
  grid-gap: 1.6rem;
  padding: 0 2rem;
`;

const StyledCard = styled.a`
  border: 1px solid rgba(158, 158, 158, 0.3);
  border-radius: 0.5rem;
  box-shadow: 0px 5px 10px -5px rgba(158, 158, 158, 1);
  color: #393939;
  padding: 2rem;
  position: relative;
  user-select: none;
  text-decoration: none;
  transition: 0.25s;
  :hover {
    box-shadow: 0px 5px 10px 1px rgba(158, 158, 158, 1);
  }
`;

const StyledCardContent = styled.div`
  margin-bottom: 1rem;
  overflow: hidden;
`;

const StyledHeader = styled.h2`
  font-size: 1.5rem;
  line-height: 2.5rem;
  margin: 0;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
`;

const StyledSubHeader = styled.p`
  color: #bdbdbd;
  font-size: 1rem;
  margin: 0;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
`;

const StyleDescription = styled.p`
  font-size: 1.25rem;
  line-height: 1.75rem;
  max-width: 100%;
`;

const StyledStarForkContainer = styled.div`
  bottom: 0;
  display: flex;
  font-size: 1.25rem;
  justify-content: space-between;
  position: absolute;
  right: 0;
`;

const StyledStar = styled.span`
  background-color: #fff59d;
  padding: 0.25rem 1rem;
`;

import styled from 'styled-components';
import { languagesMap, daysMap } from '../constants';

export default ({
  language,
  days,
  setLanguage,
  setDays,
}: {
  language: string;
  days: number;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  setDays: React.Dispatch<React.SetStateAction<number>>;
}) => (
  <StyledNav>
    <StyledGrid>
      <StyledHeaderForm>
        <StyledLabel>
          <StyledLabelSpan>Language</StyledLabelSpan>
          <StyledSelect
            onChange={(event) => {
              event.preventDefault();
              setLanguage(event.target.value);
            }}
            defaultValue={language}
          >
            {Object.entries(languagesMap).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </StyledSelect>
        </StyledLabel>

        <StyledLabel>
          <StyledLabelSpan>Time</StyledLabelSpan>
          <StyledSelect
            onChange={(event) => {
              event.preventDefault();
              setDays(parseInt(event.target.value));
            }}
            defaultValue={days}
          >
            {Object.entries(daysMap).map(([key, value]) => (
              <option key={key} value={value}>
                {key}
              </option>
            ))}
          </StyledSelect>
        </StyledLabel>
      </StyledHeaderForm>
    </StyledGrid>
  </StyledNav>
);

const StyledNav = styled.nav`
  border-top: 1rem solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 0px 2px 2px rgba(0, 0, 0, 0.098), 0px 0px 5px 1px rgba(0, 0, 0, 0.084);
  color: white;
  margin-bottom: 4rem;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  padding: 0 2rem;
  max-width: 150rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;

const StyledHeaderForm = styled.form`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: 50% 50%;
  @media (max-width: 480px) {
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr;
  }
`;

const StyledLabel = styled.label`
  position: relative;
  &:after {
    content: ' ';
    position: absolute;
    top: 50%;
    margin-top: -2px;
    right: 10px;
    width: 0;
    height: 0;
    border-left: 0.75rem solid transparent;
    border-right: 0.75rem solid transparent;
    border-top: 0.75rem solid white;
  }
`;

const StyledLabelSpan = styled.span`
  font-size: 1rem;
  left: 1rem;
  position: absolute;
  top: 0.5rem;
  user-select: none;
`;

const StyledSelect = styled.select`
  appearance: none;
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 0;
  color: white;
  cursor: pointer;
  font-size: 1.25rem;
  outline: none;
  padding: 2rem 1rem 1rem 1rem;
  width: 100%;
`;

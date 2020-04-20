import styled from 'styled-components';
import { languagesMap, daysMap } from '../constants';

export default ({
  language,
  days,
  setLanguage,
  setDays,
  theme,
}: {
  language: string;
  days: number;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  setDays: React.Dispatch<React.SetStateAction<number>>;
  theme: string;
}) => (
  <StyledNav theme={theme}>
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
  </StyledNav>
);

const StyledNav = styled.nav`
  background-color: ${(props) => props.theme};
  color: white;
  margin-bottom: 4rem;
  padding: 0.5rem 0;
`;

const StyledHeaderForm = styled.form`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-rows: 1fr 1fr;
  padding: 0 2rem;

  @media (min-width: 768px) {
    grid-gap: 1.5rem;
    grid-template-columns: 25% 25%;
    grid-template-rows: none;
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

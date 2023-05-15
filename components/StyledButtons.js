import styled from "styled-components";
import { GoSearch } from "react-icons/go";

const SubmitButton = styled.button`
  padding: 0.5em;
  width: 20%;
`;

const EditDeleteButton = styled.button`
  height: 1.7rem;
  width: 1.7rem;
  margin-left: 0.3rem;
  padding: ${(props) => (props.padding ? props.padding : "0")};
`;

const SearchButton = styled.button`
  padding: 0.2rem 0.2rem 0 0.2rem;
  margin-left: 0.4rem;
`;

export default function StyledSubmitButton() {
  return <SubmitButton type="submit">Submit</SubmitButton>;
}

export function StyledEditDeleteButton({ onClick, icon, ariaLabel, padding }) {
  const Icon = icon;
  return (
    <EditDeleteButton
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      padding={padding}
    >
      <Icon />
    </EditDeleteButton>
  );
}

export function StyledSearchButton() {
  return (
    <SearchButton type="submit" aria-label="search">
      <GoSearch />
    </SearchButton>
  );
}

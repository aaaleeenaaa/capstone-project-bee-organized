import styled from "styled-components";
import { GoSearch } from "react-icons/go";

const SubmitButton = styled.button`
  padding: 0.5em;
  width: 20%;
`;

const EditDeleteButton = styled.button`
  height: 1.7rem;
  width: 1.7rem;
  background-color: transparent;
  border: none;
  top: 0;
  padding: ${(props) => props.padding || "0"};
  right: ${(props) => props.right || "0"};
  font-size: 1.1rem;
  position: absolute;
`;

const SearchButton = styled.button`
  padding: 0.2rem 0.2rem 0 0.2rem;
  margin-left: 0.4rem;
`;

export default function StyledSubmitButton() {
  return <SubmitButton type="submit">Submit</SubmitButton>;
}

export function StyledEditDeleteButton({
  onClick,
  icon,
  ariaLabel,
  padding,
  right,
}) {
  const Icon = icon;
  return (
    <EditDeleteButton
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      padding={padding}
      right={right}
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

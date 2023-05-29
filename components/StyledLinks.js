import styled from "styled-components";
import Link from "next/link";

const BackLink = styled(Link)`
  position: fixed;
  bottom: 4.5rem;
  left: 0.5rem;
  text-decoration: none;
  color: var(--link);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--link);
  margin-left: ${(props) => props.marginleft || "0"};

  &:hover {
    cursor: pointer;
    color: var(--linkHover);
    font-weight: bold;
  }
`;

export function StyledBackLink({ href }) {
  return (
    <BackLink href={href} aria-label="back to prior page">
      ←
    </BackLink>
  );
}

export { StyledLink };

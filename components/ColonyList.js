import { StyledList } from "./StyledList";
import ColonyCard from "./ColonyCard";
import { StyledLink } from "./LocationList";

export default function ColonyList({ colonies }) {
  return (
    <StyledList>
      {colonies.map((colony) => {
        return (
          <StyledLink href={`/colonydetail/${colony.id}`} key={colony.id}>
            <ColonyCard colony={colony} />
          </StyledLink>
        );
      })}
    </StyledList>
  );
}

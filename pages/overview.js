import styled from "styled-components";
import { StyledLink } from "@/components/StyledLinks";
import { StyledSection } from "@/components/StyledSections";
import { StyledCardElement } from "@/components/StyledCardElement";

const StyledOverviewColony = styled.article`
  padding: 1rem 0.5rem;
  margin: 0.3rem;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  word-wrap: break-word;
`;

const StyledOverviewColonySection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledOverviewLocation = styled.p`
  font-weight: bold;
`;

export default function OverviewPage({ locations, colonies }) {
  return (
    <StyledSection>
      {locations.map((location) => {
        const filteredColonies = colonies.filter(
          (colony) => colony.locationId === location.id
        );
        return (
          <StyledCardElement key={location.id} width="20rem">
            <StyledLink href={`/locationdetail/${location.id}`}>
              <StyledOverviewLocation>
                {location.locationName}
              </StyledOverviewLocation>
            </StyledLink>
            <StyledOverviewColonySection>
              {filteredColonies.map((colony) => (
                <StyledLink href={`/colonydetail/${colony.id}`} key={colony.id}>
                  <StyledOverviewColony>
                    {colony.colonyName}
                  </StyledOverviewColony>
                </StyledLink>
              ))}
            </StyledOverviewColonySection>
          </StyledCardElement>
        );
      })}
    </StyledSection>
  );
}

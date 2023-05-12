import { StyledLink } from "@/components/LocationList";
import styled from "styled-components";
import { StyledSection } from "@/components/StyledSections";

const StyledOverviewCard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px grey solid;
  padding: 1rem;
  margin-bottom: 1rem;
  width: 18rem;
`;

const StyledOverviewColony = styled.article`
  padding: 1rem;
  border: 1px solid grey;
  margin: 0.3rem;
`;

const StyledColonySection = styled.section`
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
          <StyledOverviewCard key={location.id}>
            <StyledLink href={`/locationdetail/${location.id}`}>
              <StyledOverviewLocation>
                {location.locationName}
              </StyledOverviewLocation>
            </StyledLink>
            <StyledColonySection>
              {filteredColonies.map((colony) => (
                <StyledLink href={`/colonydetail/${colony.id}`} key={colony.id}>
                  <StyledOverviewColony>
                    {colony.colonyName}
                  </StyledOverviewColony>
                </StyledLink>
              ))}
            </StyledColonySection>
          </StyledOverviewCard>
        );
      })}
    </StyledSection>
  );
}

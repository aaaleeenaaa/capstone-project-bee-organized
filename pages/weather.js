import React, { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";
import Image from "next/image";
import { StyledSection, StyledRowSection } from "@/components/StyledSections";
import { StyledLabel, StyledInput } from "@/components/StyledFormElements";
import { StyledSearchButton } from "@/components/StyledButtons";
import { StyledCardElement } from "@/components/StyledCardElement";

export default function WeatherPage() {
  const [weatherLocation, setWeatherLocation] = useLocalStorageState(
    "weatherLocation",
    { defaultValue: "Hamburg" }
  );

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `/api/weather?location=${weatherLocation}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchWeatherData();
  }, [weatherLocation]);

  const currentDate = new Date();
  const tomorrowDate = new Date(currentDate);
  tomorrowDate.setDate(currentDate.getDate() + 1);
  const options = { weekday: "long" };
  const todayWeekday = currentDate.toLocaleDateString("en-US", options);
  const tomorrowWeekday = tomorrowDate.toLocaleDateString("en-US", options);

  function handleLocationSubmit(event) {
    event.preventDefault();
    const newLocation = event.target.weatherLocation.value;
    setWeatherLocation(newLocation);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Failed to load weather data</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <StyledSection>
      <form onSubmit={handleLocationSubmit}>
        <StyledLabel htmlFor="weatherLocation">City: {""}</StyledLabel>
        <StyledInput
          id="weatherLocation"
          name="weatherLocation"
          type="text"
          maxLength="30"
          minLength="3"
          required
        />
        <StyledSearchButton />
      </form>

      <p>Current city: {weatherLocation}</p>

      <StyledCardElement width="21rem" padding="0.8rem">
        <StyledRowSection>
          <h5>
            Today, {todayWeekday},{" "}
            {new Date(data.forecast.forecastday[0].date).toLocaleDateString(
              "de-DE"
            )}
          </h5>
          <Image
            src={`https:${data.forecast.forecastday[0].day.condition.icon}`}
            alt="weather icon"
            width={64}
            height={64}
            quality={30}
          />
        </StyledRowSection>
        <p>
          Temperature (min/max): {data.forecast.forecastday[0].day.mintemp_c}
          °C / {data.forecast.forecastday[0].day.maxtemp_c}°C{" "}
        </p>
        <p>
          Probability of Rain:{" "}
          {data.forecast.forecastday[0].day.daily_chance_of_rain}%
        </p>
      </StyledCardElement>

      <StyledCardElement width="21rem" padding="0.8rem">
        <StyledRowSection>
          <h5>
            Tomorrow, {tomorrowWeekday},{" "}
            {new Date(data.forecast.forecastday[1].date).toLocaleDateString(
              "de-DE"
            )}
          </h5>
          <Image
            src={`https:${data.forecast.forecastday[1].day.condition.icon}`}
            alt="weather icon"
            width={64}
            height={64}
            quality={80}
          />
        </StyledRowSection>
        <p>
          Temperature (min/max): {data.forecast.forecastday[1].day.mintemp_c}°C
          / {data.forecast.forecastday[1].day.maxtemp_c}°C{" "}
        </p>
        <p>
          Probability of Rain:{" "}
          {data.forecast.forecastday[1].day.daily_chance_of_rain}%
        </p>
      </StyledCardElement>

      <StyledCardElement width="21rem" padding="0.8rem">
        <StyledRowSection>
          <h5>
            {new Date(data.forecast.forecastday[2].date).toLocaleDateString(
              "de-DE"
            )}
          </h5>
          <Image
            src={`https:${data.forecast.forecastday[2].day.condition.icon}`}
            alt="weather icon"
            width={64}
            height={64}
            quality={80}
          />
        </StyledRowSection>
        <p>
          Temperature (min/max): {data.forecast.forecastday[2].day.mintemp_c}°C
          / {data.forecast.forecastday[2].day.maxtemp_c}°C{" "}
        </p>
        <p>
          Probability of Rain:{" "}
          {data.forecast.forecastday[2].day.daily_chance_of_rain}%
        </p>
      </StyledCardElement>
    </StyledSection>
  );
}

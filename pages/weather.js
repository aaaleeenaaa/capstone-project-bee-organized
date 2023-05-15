import React, { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import useSWR from "swr";
import Image from "next/image";
import { StyledSection, StyledRowSection } from "@/components/StyledSections";
import { Label, Input } from "@/components/StyledFormElements";
import styled from "styled-components";
import { StyledSearchButton } from "@/components/StyledButtons";

const StyledWeatherDay = styled.div`
  border: 1px solid grey;
  padding: 0.3rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 21rem;
`;

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function WeatherPage() {
  const [weatherLocation, setWeatherLocation] = useLocalStorageState(
    "weatherLocation",
    { defaultValue: "Hamburg" }
  );
  const [url, setUrl] = useState(
    `https://api.weatherapi.com/v1/forecast.json?key=a7f12ff76d6c4b7383f102231231505&q=${weatherLocation}&days=7&aqi=no&alerts=no`
  );

  const { data, error, isLoading } = useSWR(url, fetcher);

  useEffect(() => {
    setUrl(
      `https://api.weatherapi.com/v1/forecast.json?key=a7f12ff76d6c4b7383f102231231505&q=${weatherLocation}&days=7&aqi=no&alerts=no`
    );
  }, [weatherLocation]);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const currentDate = new Date();
  const tomorrowDate = new Date(currentDate);
  tomorrowDate.setDate(currentDate.getDate() + 1);
  const options = { weekday: "long" };
  const todayWeekday = currentDate.toLocaleDateString("en-US", options);
  const tomorrowWeekday = tomorrowDate.toLocaleDateString("en-US", options);

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      const newLocation = event.target.value;
      setWeatherLocation(newLocation);
    }
  }

  function handleLocationSubmit(event) {
    event.preventDefault();
    const newLocation = event.target.weatherLocation.value;
    setWeatherLocation(newLocation);
  }

  return (
    <StyledSection>
      <form onSubmit={handleLocationSubmit}>
        <Label htmlFor="weatherLocation">City: {""}</Label>
        <Input
          id="weatherLocation"
          name="weatherLocation"
          type="text"
          maxLength="30"
          minLength="3"
          onKeyPress={handleKeyPress}
          required
        />
        <StyledSearchButton />
      </form>

      <p>Current city: {weatherLocation}</p>

      <StyledWeatherDay>
        <StyledRowSection>
          <h5>
            Today, {todayWeekday}, {data.forecast.forecastday[0].date}
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
      </StyledWeatherDay>

      <StyledWeatherDay>
        <StyledRowSection>
          <h5>
            Tomorrow, {tomorrowWeekday}, {data.forecast.forecastday[1].date}
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
      </StyledWeatherDay>

      <StyledWeatherDay>
        <StyledRowSection>
          <h5>{data.forecast.forecastday[2].date}</h5>
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
      </StyledWeatherDay>

      <StyledWeatherDay>
        <StyledRowSection>
          <h5>{data.forecast.forecastday[3].date}</h5>
          <Image
            src={`https:${data.forecast.forecastday[3].day.condition.icon}`}
            alt="weather icon"
            width={64}
            height={64}
            quality={80}
          />
        </StyledRowSection>
        <p>
          Temperature (min/max): {data.forecast.forecastday[3].day.mintemp_c}°C
          / {data.forecast.forecastday[3].day.maxtemp_c}°C{" "}
        </p>
        <p>
          Probability of Rain:{" "}
          {data.forecast.forecastday[3].day.daily_chance_of_rain}%
        </p>
      </StyledWeatherDay>

      <StyledWeatherDay>
        <StyledRowSection>
          <h5>{data.forecast.forecastday[4].date}</h5>
          <Image
            src={`https:${data.forecast.forecastday[4].day.condition.icon}`}
            alt="weather icon"
            width={64}
            height={64}
            quality={80}
          />
        </StyledRowSection>
        <p>
          Temperature (min/max): {data.forecast.forecastday[4].day.mintemp_c}°C
          / {data.forecast.forecastday[4].day.maxtemp_c}°C{" "}
        </p>
        <p>
          Probability of Rain:{" "}
          {data.forecast.forecastday[4].day.daily_chance_of_rain}%
        </p>
      </StyledWeatherDay>

      <StyledWeatherDay>
        <StyledRowSection>
          <h5>{data.forecast.forecastday[5].date}</h5>
          <Image
            src={`https:${data.forecast.forecastday[5].day.condition.icon}`}
            alt="weather icon"
            width={64}
            height={64}
            quality={80}
          />
        </StyledRowSection>
        <p>
          Temperature (min/max): {data.forecast.forecastday[5].day.mintemp_c}°C
          / {data.forecast.forecastday[5].day.maxtemp_c}°C{" "}
        </p>
        <p>
          Probability of Rain:{" "}
          {data.forecast.forecastday[5].day.daily_chance_of_rain}%
        </p>
      </StyledWeatherDay>

      <StyledWeatherDay>
        <StyledRowSection>
          <h5>{data.forecast.forecastday[6].date}</h5>
          <Image
            src={`https:${data.forecast.forecastday[6].day.condition.icon}`}
            alt="weather icon"
            width={64}
            height={64}
            quality={80}
          />
        </StyledRowSection>
        <p>
          Temperature: {data.forecast.forecastday[6].day.mintemp_c}°C /{" "}
          {data.forecast.forecastday[6].day.maxtemp_c}°C{" "}
        </p>
        <p>
          Probability of Rain:{" "}
          {data.forecast.forecastday[6].day.daily_chance_of_rain}%
        </p>
      </StyledWeatherDay>
    </StyledSection>
  );
}

const Card = ({
  time,
  temp,
  feels_like,
  humidity,
  uvi,
  wind_speed,
  weather,
  pop,
}) => {
  weather.description = weather.description
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
  return (
    <article>
      <h2>
        {time} - {weather.description} - {Math.ceil(temp)} &deg;F
      </h2>
      <p>Feels like: {Math.ceil(feels_like)} &deg;F</p>
      <p>UV Index: {uvi}</p>
      <p>Humidity: {humidity}%</p>
      <p>Chance of rain: {pop * 100}%</p>
      <p>Wind speed: {wind_speed} mph</p>
    </article>
  );
};

export default Card;

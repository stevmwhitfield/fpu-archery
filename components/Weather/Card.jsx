import styles from "./Card.module.scss";

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
    <article className={styles.card}>
      <h3 className={styles["card-header"]}>
        {time} - {weather.description} - {Math.ceil(temp)} &deg;F
      </h3>
      <div className={styles["card-content"]}>
        <p>Feels like: {Math.ceil(feels_like)} &deg;F</p>
        <p>UV Index: {uvi}</p>
        <p>Humidity: {humidity}%</p>
        <p>Chance of rain: {Math.round(pop * 100)}%</p>
        <p className={styles["span-2"]}>Wind speed: {wind_speed} mph</p>
      </div>
    </article>
  );
};

export default Card;

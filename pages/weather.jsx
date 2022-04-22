import Head from "next/head";
import { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Card from "../components/Weather/Card";
import styles from "../styles/Weather.module.scss";

const WeatherPage = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadWeather = async () => {
    try {
      const response = await fetch("/api/getWeather");
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data.hourly);
      } else {
        alert(response.status + ": " + response.statusText);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    loadWeather();
  }, []);

  useEffect(() => {
    if (weatherData.length === 0) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [weatherData]);

  return (
    <div id="wrapper">
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Lakeland Weather - Florida Poly Archery</title>
        <link rel="icon" type="image" href="/favicon.png" />
      </Head>
      <Header />
      <main id="main">
        <h1 className="page-header">Lakeland Weather</h1>
        {isLoading ? (
          <h2 className="page-header">Loading weather data...</h2>
        ) : null}
        <section className={styles.section}>
          {weatherData.length > 0
            ? weatherData.map((hour, i) => {
                if (i > 12) {
                  return;
                } else {
                  const {
                    dt,
                    temp,
                    feels_like,
                    humidity,
                    uvi,
                    wind_speed,
                    weather,
                    pop,
                  } = hour;

                  let hourlyDate = new Date(dt * 1000);
                  let hourlyTime = hourlyDate.getHours();
                  if (hourlyDate.getHours() > 11) {
                    if (hourlyDate.getHours() > 12) {
                      hourlyTime = hourlyDate.getHours() - 12 + " PM";
                    } else hourlyTime += " PM";
                  } else {
                    hourlyTime += " AM";
                  }
                  if (hourlyDate.getHours() === 0) {
                    hourlyTime = "12 AM";
                  }

                  if (hour.wind_gust) {
                    return (
                      <Card
                        key={i}
                        time={hourlyTime}
                        temp={temp}
                        feels_like={feels_like}
                        humidity={humidity}
                        uvi={uvi}
                        wind_speed={wind_speed}
                        wind_gust={hour.wind_gust}
                        weather={weather[0]}
                        pop={pop}
                      />
                    );
                  }

                  return (
                    <Card
                      key={i}
                      time={hourlyTime}
                      temp={temp}
                      feels_like={feels_like}
                      humidity={humidity}
                      uvi={uvi}
                      wind_speed={wind_speed}
                      weather={weather[0]}
                      pop={pop}
                    />
                  );
                }
              })
            : null}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WeatherPage;

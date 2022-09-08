import { useState } from "react";
import Head from "next/head";
import { format } from "date-fns";
import { motion } from "framer-motion";

import Header from "../components/Header";
import SectionCurrentWeather from "../components/SectionCurrentWeather";
import SectionFutureWeather from "../components/SectionFutureWeather";

const API_KEY = "34be6fda4bdbaf04539bf112fec49678";

export default function Home() {
  const [city, setCity] = useState("");
  const [cityWeather, setCityWeather] = useState("");
  const [cityForecastWeather, setCityForecastWeather] = useState("");

  const getCityWeather = async city => {
    // Good practice for aborting request
    const controller = new AbortController();

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`,
        { signal: controller.signal }
      );
      // guard clause
      if (!response.ok) throw new Error(response.statusText);

      const data = await response.json();
      const long = data.coord.lon; // 18.4232
      const lat = data.coord.lat; // -33.9258
      console.log("cityWeather: ", data);

      setCityWeather(data);
      getCityForecastWeather(long, lat);
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("The fetch was aborted");
      } else {
        console.log("Could not fetch the data");
      }
    }

    return () => {
      controller.abort();
    };
  };

  const getCityForecastWeather = async (long, lat) => {
    // Good practice for aborting request
    const controller = new AbortController();

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&appid=${API_KEY}`,
        { signal: controller.signal }
      );

      // guard clause
      if (!response.ok) throw new Error(response.statusText);

      const data = await response.json();
      const forecast = data.list.slice(0, 5);
      console.log("cityForecastWeather: ", forecast);

      setCityForecastWeather(forecast);
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("The fetch was aborted");
      } else {
        console.log("Could not fetch the data");
      }
    }

    return () => {
      controller.abort();
    };
  };

  const convertTime = time => {
    const date = new Date(time * 1000).toLocaleTimeString().slice(0, -3);
    return date;
  };

  const formatDate = () => {
    const date = new Date();
    const answer = format(date, "EEE, do MMMM yyyy");
    return answer;
  };

  const resetForm = () => {
    setCity("");
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (city.length <= 0) return console.log("City needs to have characters");

    getCityWeather(city);
    resetForm();
  };

  return (
    <>
      <Head>
        <title>Rainbow Weather + | Home</title>
        <meta
          name="description"
          content="Get the latest weather information for any city with the
          most detailed search API on the internet."
        />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/images/safari-pinned-tab.svg"
          color="#8c8aff"
        />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta name="msapplication-TileColor" content="#8c8aff" />
        <meta name="msapplication-config" content="/images/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <>
        {cityForecastWeather ? (
          <>
            <Header cityForecastWeather={cityForecastWeather} />

            <main>
              <div
                className="container back"
                onClick={() => setCityForecastWeather("")}
              >
                <svg
                  width="25"
                  height="25"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#8C8AFF"
                    d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
                  />
                </svg>
              </div>

              <SectionCurrentWeather
                cityWeather={cityWeather}
                formatDate={formatDate}
                convertTime={convertTime}
              />
              <SectionFutureWeather
                cityForecastWeather={cityForecastWeather}
                convertTime={convertTime}
              />
            </main>
          </>
        ) : (
          <>
            <Header cityForecastWeather={cityForecastWeather} />

            <main className="content-center weather-bg">
              <section className="search-weather center">
                <div className="container flow-content">
                  <motion.h1
                    className="main-heading"
                    initial={{ opacity: 0, translateX: -40 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 1.2 }}
                  >
                    We provide the{" "}
                    <span className="text-accent">most accurate</span> weather
                    forecasts
                  </motion.h1>

                  <motion.p
                    className="sub-heading"
                    initial={{ opacity: 0, translateX: -40 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                  >
                    Get the latest weather information for any city with the
                    most detailed API on the internet.
                  </motion.p>

                  <motion.form
                    onSubmit={handleSubmit}
                    className="city-form spacer"
                    initial={{ opacity: 0, translateX: -40 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                  >
                    <label htmlFor="city" className="visually-hidden">
                      City:
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      onChange={e => setCity(e.target.value)}
                      value={city}
                      required
                      placeholder="Enter a city"
                    />
                    <motion.button
                      key="btn"
                      initial={{ translateY: 0 }}
                      whileHover={{ translateY: -2 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", duration: 0.35 }}
                      className="btn"
                      type="submit"
                    >
                      Search
                    </motion.button>
                  </motion.form>
                </div>
              </section>
            </main>
          </>
        )}
      </>
    </>
  );
}

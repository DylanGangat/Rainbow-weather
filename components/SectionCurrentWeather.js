import Image from "next/image";
import { motion } from "framer-motion";

export default function SectionCurrentWeather({
  cityWeather,
  formatDate,
  convertTime,
}) {
  
  const hoverAnimation = {
    visible: { opacity: 1, translateY: 0 },
    hidden: { opacity: 0, translateY: 20 },
  };

  return (
    <section className="container current-weather center">
      {cityWeather && (
        <div className="flow-content">
          <motion.div
            className="flow-content"
            initial={{ opacity: 0, translateX: -40 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="date">{formatDate()}</span>
            <h1 className="main-heading">{cityWeather.name}</h1>
            <p className="temperature">
              {parseInt(cityWeather.main.temp)} &#8451;
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateX: -40 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={`http://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@2x.png`}
              height="100"
              width="100"
              alt="weather icon"
              className="image"
            />
            <p>{cityWeather.weather[0].main}</p>
          </motion.div>

          <div className="info flow-content">
            <motion.p
              initial={{ opacity: 0, translateX: -40 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1 }}
            >
              {parseInt(cityWeather.main.temp_max)}&#8451; /{" "}
              {parseInt(cityWeather.main.temp_min)}
              &#8451; Feels like {parseInt(cityWeather.main.feels_like)}
              &#8451;
            </motion.p>

            <div className="info-grid spacer">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                variants={hoverAnimation}
                className="info-card"
              >
                <span className="title">Wind:</span>
                <span className="description">
                  {" "}
                  {parseInt(cityWeather.wind.speed)} km/h
                </span>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
                variants={hoverAnimation}
                className="info-card"
              >
                <span className="title">Humidity:</span>
                <span className="description">
                  {" "}
                  {cityWeather.main.humidity}%
                </span>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.9 }}
                variants={hoverAnimation}
                className="info-card"
              >
                <span className="title">Sunrise:</span>
                <span className="description">
                  {" "}
                  {convertTime(cityWeather.sys.sunrise)}
                </span>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.2 }}
                variants={hoverAnimation}
                className="info-card"
              >
                <span className="title">Sunset:</span>
                <span className="description">
                  {" "}
                  {convertTime(cityWeather.sys.sunset)}
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

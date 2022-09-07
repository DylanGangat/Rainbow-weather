import Image from "next/image";
import { motion } from "framer-motion";

export default function SectionFutureWeather({
  cityForecastWeather,
  convertTime,
}) {
  const hoverAnimation = {
    visible: { opacity: 1, translateY: 0 },
    hidden: { opacity: 0, translateY: 20 },
  };

  return (
    <section className="container future-weather center">
      <h2 className="section-title  text-accent">3 Hour Forecast</h2>
      <div className="forecast-grid spacer">
        {cityForecastWeather &&
          cityForecastWeather.map((item, index) => (
            <motion.div
              key={item.dt}
              className="forecast-card flow-content center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.3 }}
              variants={hoverAnimation}
            >
              <p className="time">{convertTime(item.dt)}</p>
              <div>
                <Image
                  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  height="75"
                  width="75"
                  alt="weather icon"
                />
                <p className="weather">{item.weather[0].main}</p>
              </div>
              <p className="temp">{parseInt(item.main.temp)} &#8451;</p>
            </motion.div>
          ))}
      </div>
    </section>
  );
}

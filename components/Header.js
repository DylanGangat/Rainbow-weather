import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRainbow } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/components/Header.module.scss";

export default function Header({ cityForecastWeather }) {
  return (
    <>
      {cityForecastWeather ? (
        <header className={styles["primary-header"]}>
          <div className="container">
            <FontAwesomeIcon icon={faRainbow} className="fa-xl" />{" "}
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </header>
      ) : (
        <header className={styles["hero-header"]}>
          <div className="container">
            <FontAwesomeIcon icon={faRainbow} className=" fa-xl" />{" "}
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </header>
      )}
    </>
  );
}

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
            {/* <svg
              width="40"
              height="40"
              viewBox="0 0 670 670"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M335 175C193.6 175 79 289.6 79 431V527C79 544.7 64.7 559 47 559C29.3 559 15 544.7 15 527V431C15 254.3 158.3 111 335 111C511.7 111 655 254.3 655 431V527C655 544.7 640.7 559 623 559C605.3 559 591 544.7 591 527V431C591 289.6 476.4 175 335 175ZM335 367C299.7 367 271 395.7 271 431V527C271 544.7 256.7 559 239 559C221.3 559 207 544.7 207 527V431C207 360.3 264.3 303 335 303C405.7 303 463 360.3 463 431V527C463 544.7 448.7 559 431 559C413.3 559 399 544.7 399 527V431C399 395.7 370.3 367 335 367ZM175 431V527C175 544.7 160.7 559 143 559C125.3 559 111 544.7 111 527V431C111 307.3 211.3 207 335 207C458.7 207 559 307.3 559 431V527C559 544.7 544.7 559 527 559C509.3 559 495 544.7 495 527V431C495 342.6 423.4 271 335 271C246.6 271 175 342.6 175 431Z"
                fill="#8C8AFF"
              />
            </svg> */}
            <FontAwesomeIcon icon={faRainbow} className=" fa-xl" />{" "}
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </header>
      )}
    </>
  );
}

import {Weather} from "../../hooks/useWeather.ts";
import {formatTemp} from "../../utils";
import styles from "./WeatherDetail.module.css"

type WeatherDetailProps = {
    weather: Weather
}
export default function WeatherDetail({weather}: WeatherDetailProps ) {
    return (
        <div className={styles.container}>
            <h1>Weather Detail</h1>
            <p>{weather.name}</p>
            <p className={styles.current}>{formatTemp(weather.main.temp)}&deg;C</p>
            <div className={styles.temps}>
                <p>Min <span>{formatTemp(weather.main.temp_min)}&deg;C</span></p>
                <p>Max <span>{formatTemp(weather.main.temp_max)}&deg;C</span></p>
            </div>
        </div>
    )
}
import styles from './App.module.css'
import Form from "./components/Form/Form.tsx";
import useWeather from "./hooks/useWeather.ts";
import WeatherDetail from "./components/WeatherDetail/WeatherDetail.tsx";
import Loading from "./components/Loading/Loading.tsx";
import Alert from "./components/Alert/Alert.tsx";
function App() {
    const {fetchWeather, weather, loading, hasWeatherData, notFound} = useWeather()
    return (
        <>
            <h1 className={styles.title}>Clima React TypeScript</h1>
            <div className={styles.container}>
                <Form
                    fetchWeather={fetchWeather}
                />
                <p>

                    {loading && <Loading />}
                    {hasWeatherData && <WeatherDetail weather={weather} />}
                    {notFound && <Alert>Ciudad no encontrada</Alert>}
                </p>
            </div>
        </>
    )
}

export default App

import {countries} from "../../data";
import styles from "./Form.module.css"
import {ChangeEvent, FormEvent, useState} from "react";
import {SearchType} from "../../types";
import Alert from "../Alert/Alert.tsx";

type FormProps = {
    fetchWeather: (search: SearchType) => Promise<void>
}
export default function Form({fetchWeather}: FormProps) {
    const [search, setSearch] = useState<SearchType>({
        city: '',
        country: ''
    })
    const [alert, setAlert] = useState<string>('')

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (Object.values(search).includes('')) {
            setAlert('Debe rellenar todos los campos')
            return
        } else {
            setAlert('')
        }
        fetchWeather(search)
    }
    return (
        <form className={styles.form}
            onSubmit={handleSubmit}
        >
            {alert && <Alert>{alert}</Alert>}
            <div className={styles.field}>
                <label htmlFor="city">Ciudad:</label>
                <input type="text" id="city" name="city" value={search.city} placeholder="Ciudad"
                    onChange={handleChange}
                />
            </div>
            <div className={styles.field}>
                <label htmlFor="country">País:</label>
                <select name="country" id="country" value={search.country}
                    onChange={handleChange}
                >
                    <option value="">Seleccione un país</option>
                    {countries.map(country => (
                        <option key={country.code} value={country.code}>{country.name}</option>
                    ))}
                </select>
            </div>
            <input className={styles.submit} type="submit" value="Enviar" />
        </form>
)
}
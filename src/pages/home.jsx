import Button from '../components/Button/Button.jsx';
import styles from '../components/Button/Button.module.css';
import { Link } from 'react-router-dom'

export function Home() {
    return (
        <>
            <h1>Home Page</h1>

            <Link to="/women">
                <Button text="SHOP WOMENS" className={styles['hero-button']}/>
            </Link>
            <Link to="/men">
                <Button text="SHOP MENS"/>
            </Link>

            <Link to="/">
                <Button text="HOME"/>
            </Link>
        </>
    )
};
import Button from '../components/Button/Button.jsx'
import styles from '../components/Button/Button.module.css';
import { Link } from 'react-router-dom'

export function Women() {
    return (
        <>
            <h1>Womens Page</h1>

            <Link to="/">
                <Button text="HOME" className={styles['hero-button']}/>
            </Link>
        </>
    )
};

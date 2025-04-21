import Button from '../components/Button/Button.jsx'
import { Link } from 'react-router-dom'

export function Men() {
    return (
        <>
            <h1>Mens Page</h1>

            <Link to="/">
                <Button text="HOME"/>
            </Link>
        </>
    )
};

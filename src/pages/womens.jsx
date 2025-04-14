import HeroButton from '../components/HeroButton.jsx'
import BodyButton from '../components/BodyButton.jsx'
import { Link } from 'react-router-dom'

export function Womens() {
    return (
        <>
            <h1>Womens Page</h1>

            <Link to="/">
                <BodyButton text="HOME"/>
            </Link>
        </>
    )
};

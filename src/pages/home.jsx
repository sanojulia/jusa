import HeroButton from '../components/HeroButton.jsx'
import BodyButton from '../components/BodyButton.jsx'
import { Link } from 'react-router-dom'

export function Home() {
    return (
        <>
            <h1>Home Page</h1>

            <Link to="/womens">
                <HeroButton text="SHOP WOMENS"/>
            </Link>
            <Link to="/mens">
                <HeroButton text="SHOP MENS"/>
            </Link>

            <Link to="/">
                <BodyButton text="HOME"/>
            </Link>
        </>
    )
};
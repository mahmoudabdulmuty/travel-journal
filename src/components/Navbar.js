import { FaGlobeAmericas } from 'react-icons/fa';

export default function Navbar() {
	return (
		<nav className="nav flex-center">
			<FaGlobeAmericas className="nav__icon" />
			<p className="nav__desc">my travel journal.</p>
		</nav>
	);
}

import { FaGlobeAmericas } from 'react-icons/fa';

export default function Navbar() {
	return (
		<nav className="nav bg-primary text-white flex">
			<FaGlobeAmericas className="globe-icon" />
			<p>my travel journal.</p>
		</nav>
	);
}

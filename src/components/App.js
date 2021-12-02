import Navbar from './Navbar';
import Card from './Card';
import data from '../data';

export default function App() {
	return (
		<>
			<Navbar />
			<div class="container">
				{data.map((item) => {
					return <Card {...item} />;
				})}
			</div>
		</>
	);
}

import mountFuji from '../images/mount-fuji.png';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function Main() {
	return (
		<div className="container">
			<div className="card">
				<div className="img-box">
					<img className="card__img" src={mountFuji} alt="mount-fuji" />
				</div>
				<div className="card__details">
					<div class="card__location">
						<FaMapMarkerAlt className="card__icon" />
						<div className="card__country">japan</div>
						<div class="card__maps">View on Google Maps</div>
					</div>
					<div className="card__title">Mount Fuji</div>
					<div class="card__date">12 Jan, 2021 - 24 Jan, 2021</div>
					<div className="card__description">
						Mount Fuji is the tallest mountain in Japan, standing at 3,776
						meters (12,380 feet). Mount Fuji is the single most popular tourist
						site in Japan, for both Japanese and foreign tourists.
					</div>
				</div>
			</div>
		</div>
	);
}

import { FaMapMarkerAlt } from 'react-icons/fa';

export default function Card(props) {
	return (
		<div className="card">
			<div className="img-box">
				<img className="card__img" src={props.imageUrl} alt="" />
			</div>
			<div className="card__details">
				<div className="card__location">
					<FaMapMarkerAlt className="card__icon" />
					<span className="card__country">{props.location}</span>
					<a href={props.googleMapsUrl} className="card__maps">
						View on Google Maps
					</a>
				</div>
				<div className="card__title">{props.title}</div>
				<div className="card__date">
					{props.startDate} - {props.endDate}
				</div>
				<div className="card__description">{props.description}</div>
			</div>
			<hr className="hr-line" />
		</div>
	);
}

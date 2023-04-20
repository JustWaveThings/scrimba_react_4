import star from '../assets/Star 1.png';

export default function Card(props) {
	return (
		<div className="Card">
			<div className="topCard">
				<img
					className="personCard"
					src={props.img}
					alt="experience photo"
					height="235"
					width="176"
				/>
				<div className="status">SOLD OUT</div>
			</div>
			<div className="bottomCard">
				<div className="starHolder">
					<img
						className="starIcon"
						src={star}
						alt="red star"
					/>
					<div className="starRating">{props.rating}</div>
					<div className="ratingNumber grey">({props.reviewCount})</div>
					<div className="location grey"> · {props.country}</div>
				</div>
				<div className="title">{props.title}</div>
				<div className="priceDiv">
					<div className="priceBold">From ${props.price}</div>
					<div className="perPerson">/ person</div>
				</div>
			</div>
		</div>
	);
}

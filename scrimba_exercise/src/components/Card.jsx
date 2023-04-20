import star from '../assets/Star 1.png';

export default function Card(props) {
	let badgeText;
	if (props.item.openSpots === 0) {
		badgeText = 'SOLD OUT';
	} else if (props.item.location === 'Online') {
		badgeText = 'ONLINE';
	}
	return (
		<div className="Card">
			<div className="topCard">
				<img
					className="personCard"
					src={props.item.coverImg}
					alt="experience photo"
					height="235"
					width="176"
				/>
				{badgeText && <div className="status">{badgeText}</div>}
			</div>
			<div className="bottomCard">
				<div className="starHolder">
					<img
						className="starIcon"
						src={star}
						alt="red star"
					/>
					<div className="starRating">{props.item.stats.rating}</div>
					<div className="ratingNumber grey">
						({props.item.stats.reviewCount})
					</div>
					<div className="location grey"> · {props.item.location}</div>
				</div>
				<div className="title">{props.item.title}</div>
				<div className="priceDiv">
					<div className="priceBold">From ${props.item.price}</div>
					<div className="perPerson">/ person</div>
				</div>
			</div>
		</div>
	);
}

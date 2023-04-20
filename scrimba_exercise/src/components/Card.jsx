import star from '../assets/Star 1.png';
import experience from '../assets/image 12.png';

export default function Card() {
	return (
		<div className="Card">
			<div className="topCard">
				<img
					className="personCard"
					src={experience}
					alt="experience photo"
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
					<div className="starRating">5.0</div>
					<div className="ratingNumber">(6)</div>
					<div className="location"> · USA</div>
				</div>
				<div className="title">Life Lessons with Katie Zaferes</div>
				<div className="priceDiv">
					<div className="priceBold">From $136</div>
					<div className="perPerson">/ person</div>
				</div>
			</div>
		</div>
	);
}

import './card-style.css';
import { Monster } from '../../App';

type CardProps = {
	monster: Monster;
};

const Card = ({ monster }: CardProps) => {
	const { id, name, email } = monster;

	return (
		<div className='card-container' key={id}>
			<img
				alt={`name ${name}`}
				src={`https://robohash.org/${id}?set=set2&size=180x180`}
			/>
			<h2> {name} </h2>
			<p> {email} </p>
		</div>
	);
};

export default Card;

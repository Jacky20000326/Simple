import react from "react";
import styled from "styled-components";
import content from "../contant.js";
const CardStyle = () => {
	return (
		<Cards>
			{content.map((item) => (
				<Card layer={item.id % 2 == 0 && "row-reverse"}>
					<CardInfo>
						<h3>{item.title}</h3>
						<p>{item.body}</p>
					</CardInfo>
					<CardImg src={`./src/assets/${item.image}`} alt=""></CardImg>
				</Card>
			))}
		</Cards>
	);
};

const Cards = styled.div`
	width: 100vw;
	padding: 0px 25% 0px 25%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	h3 {
		font-size: 30px;
		font-weight: bold;
		margin-bottom: 15px;
		margin-top: 10%;
	}
	p {
		font-size: 16px;
		font-weight: 300;
		line-height: 1.6;
		margin-bottom: 10px;
		color: #8aa3a9;
	}
`;

const Card = styled.div`
	display: flex;
	flex-direction: ${({ layer }) => layer || "row"};
	width: 100%;
	height: 400px;
	margin-top: 50px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
	padding: 60px;
	border-radius: 30px;
`;
const CardInfo = styled.div`
	width: 50%;
	padding: 0px 15px 0px 15px;
`;
const CardImg = styled.img`
	width: 50%;
`;

export default CardStyle;

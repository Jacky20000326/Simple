import { colours } from "nodemon/lib/config/defaults";
import react from "react";
import styled from "styled-components";

const Herder = () => {
	return (
		<HeaderStyle>
			<Container>
				<Nav>
					<Logo src="./src/assets/logo.svg" alt=""></Logo>
					<Button bg="#fff">Try It Free</Button>
				</Nav>
				<Flex>
					<Info>
						<h3>Build The Community Your Fans Will Love</h3>
						<p>
							Huddle re-imagines the way we build communities. You have a voice,
							but so does your audience. Create connections with your users as
							you engage in genuine discussion.
						</p>
						<InfoButton bg="#fe2e99">Get Start For Free</InfoButton>
					</Info>
					<InfoImg src="./src/assets/illustration-mockups.svg" alt=""></InfoImg>
				</Flex>
			</Container>
		</HeaderStyle>
	);
};

const HeaderStyle = styled.header`
	/* background-color: ${({ theme }) => theme.colors.Header}; */
	width: 100vw;

	display: flex;
	flex-direction: column;

	h3 {
		font-size: 35px;
		font-weight: 900;
	}
	p {
		font-size: 18px;
		color: #8aa3a9;
		line-height: 1.5;
		margin-top: 30px;
	}
`;

const Container = styled.div`
	background-color: #ebfbff;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	padding: 0px 25% 0px 25%;
	@media (max-width: ${({ theme }) => theme.mobile}) {
		padding: 0px 10% 0px 10%;
	}
`;

const Nav = styled.nav`
	flex: 1;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 30px;
	@media (max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column;
	}
`;
const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 30px;
	width: 200px;
	height: 50px;
	border: none;
	background-color: ${({ bg }) => bg};
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
	font-size: 17px;
	font-weight: 700;
`;
const Logo = styled.img`
	width: 200px;
	height: 40px;

	@media (max-width: ${({ theme }) => theme.mobile}) {
		margin-top: 30px;
		margin-bottom: 40px;
	}
`;

const Flex = styled.div`
	flex: 3.5;
	display: flex;
	margin-top: 30px;
	margin-bottom: 40px;
	@media (max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

const Info = styled.div`
	width: 70%;
`;
const InfoImg = styled.img`
	width: 400px;
	height: 80%;
	@media (max-width: ${({ theme }) => theme.mobile}) {
		margin-top: 30px;
	}
`;

const InfoButton = styled(Button)`
	margin-top: 30px;
	width: 300px;
	font-size: 20px;
	font-weight: 900;
	color: #fff;
`;

export default Herder;

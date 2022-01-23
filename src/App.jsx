import react from "react";
import Header from "./components/Header";
import Card from "./components/card";
import { ThemeProvider } from "styled-components";
const App = () => {
	const theme = {
		colors: {
			Header: "lightgreen",
			Body: "lightyellow",
			Footer: "gray",
		},
		mobile: "768px",
	};

	return (
		<ThemeProvider theme={theme}>
			<>
				<Header></Header>
				<Card></Card>
			</>
		</ThemeProvider>
	);
};

export default App;

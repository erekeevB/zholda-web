import './style/App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<Router>
				<Header/>
				<Switch>
					<Route path={'/'} exact component={LandingPage}/>
				</Switch>
				<Footer/>
			</Router>
		</div>
	);
}

export default App;

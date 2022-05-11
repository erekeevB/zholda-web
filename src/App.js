import './style/App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import Footer from "./components/Footer";
import './firebase/firebase'
import {Toaster} from "react-hot-toast";
import ContactButtonMobile from "./components/contactButtonMobile";
import {useEffect} from "react";
import {initialize} from "react-ga";

function App() {

	useEffect(() => {
		initialize('G-VTVNYNJSHM')
	}, [])

	return (
		<div className="App">
			<ContactButtonMobile/>
			<Toaster/>
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

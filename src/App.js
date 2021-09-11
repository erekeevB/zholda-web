import './style/App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import Footer from "./components/Footer";
import './firebase/firebase'
import {Toaster} from "react-hot-toast";

function App() {
	return (
		<div className="App">
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

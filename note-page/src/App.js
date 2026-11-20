import './App.css';
import AppContainer from "components/template/container/AppContainer";
import AppFooter    from "components/template/footer/AppFooter";
import AppHeader    from "components/template/header/AppHeader";
import AppLeftSide  from "components/template/side/AppLeftSide";
import AppContent   from "./components/template/content/AppContent";
import AppRightSide from "./components/template/side/AppRightSide";

function App() {
	return (
		<AppContainer>
			<AppHeader />
			<div className="below-header">
				<main className="app-main">
					<AppLeftSide />
					<AppContent />
					<AppRightSide />
				</main>
				<AppFooter>footer</AppFooter>
			</div>
		</AppContainer>
	);
}

export default App;

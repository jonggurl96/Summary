import './App.css';
import AppContainer from "components/template/container/AppContainer";
import AppContent   from "components/template/content/AppContent";
import AppFooter    from "components/template/footer/AppFooter";
import AppHeader    from "components/template/header/AppHeader";
import AppLeftSide  from "components/template/left-side/AppLeftSide";

function App() {
	return (
		<AppContainer>
			<AppHeader />
			<div className="below-header">
				<div className="app-content">
					<AppLeftSide />
					<AppContent />
				</div>
				<AppFooter>footer</AppFooter>
			</div>
		</AppContainer>
	);
}

export default App;

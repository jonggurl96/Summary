import './App.css';
import { imgSrc }            from "api/asset/route/img";
import { ErrorIconMessage }  from "components/message/with-icon";
import AppContainer          from "components/template/container/AppContainer";
import AppFooter             from "components/template/footer/AppFooter";
import AppHeader             from "components/template/header/AppHeader";
import AppLeftSide           from "components/template/side/AppLeftSide";
import AppRightSide          from "components/template/side/AppRightSide";
import { Tree }              from "components/tree/Tree";
import { useState }          from 'react';
import Accordion             from "./components/accordion/Accordion";
import { useDirectoryStore } from "./stores/note/path/useDirectoryStore";

const SLIDE_LEFT_BUTTON_IMG_SRC = imgSrc("/arrows/first_arrow.svg");

const SLIDE_RIGHT_BUTTON_IMG_SRC = imgSrc("/arrows/end_arrow.svg");

const samplepath = "/sample/path";

function App() {

	const loadStatus = useDirectoryStore(state => state.status);
	const noteHierarchy = useDirectoryStore(state => state.data);
	const loadError = useDirectoryStore(state => state.error);

	const [leftVisible, setLeftVisible] = useState(true);

	return (
		<AppContainer>
			<AppHeader />
			<div className="below-header">
				<main className="app-main">

					{/* 왼쪽 폴더 메뉴 영역 */}
					<AppLeftSide leftVisible={leftVisible}>
						<div className="app-left-slide-header" style={{ justifyContent: leftVisible ? 'space-between' : 'center' }}>
							{leftVisible && <h1>파일찾기</h1>}
							<button className="app-left-slide-close-button" onClick={() => setLeftVisible(!leftVisible)}>
								<img src={leftVisible ? SLIDE_LEFT_BUTTON_IMG_SRC : SLIDE_RIGHT_BUTTON_IMG_SRC} alt="폴더구조 메뉴 닫기 버튼" />
							</button>
						</div>

						<hr />

						<div className="app-left-slide-body">
							{['idle', 'pending'].includes(loadStatus) && "로딩중"}
							{noteHierarchy && (<Tree data={noteHierarchy} minimize={!leftVisible} />)}
							{loadError && <ErrorIconMessage message={loadError} />}
						</div>
					</AppLeftSide>

					{/* 가운데 노트 영역 */}
					<article className="app-content">
						<div className="app-content-body">

							{/* 노트 제목 영역 */}
							<div className="app-content-header">
								<h1>노트 제목</h1>
								{samplepath && <span>{samplepath}</span>}
							</div>

							{/* 노트 내용 영역 */}
							<div className="note-content-area">
								{Array.from({ length: 100 }).map((_, index) => <div key={index}>내용 {index}</div>)}
							</div>

						</div>
					</article>

					{/* 오른쪽 메타데이터 영역 */}
					<AppRightSide>
						<Accordion title="메타데이터"></Accordion>
					</AppRightSide>

				</main>
				<AppFooter>footer</AppFooter>
			</div>
		</AppContainer>
	);
}

export default App;

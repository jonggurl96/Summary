import './App.css';
import { imgSrc }                                  from "api/asset/route/img";
import Accordion                                   from "components/accordion/Accordion";
import { ErrorIconMessage }                        from "components/message/with-icon";
import NoteBlock                                   from "components/note/blocks";
import { CaptionTable, TableTd, TableTh, TableTr } from "components/table/table";
import AppContainer                                from "components/template/container/AppContainer";
import AppFooter                                   from "components/template/footer/AppFooter";
import AppHeader                                   from "components/template/header/AppHeader";
import AppLeftSide                                 from "components/template/side/AppLeftSide";
import AppRightSide                                from "components/template/side/AppRightSide";
import { Tree }                                    from "components/tree/Tree";
import { useEffect, useState }                     from 'react';
import { useEditModeStore }                        from "stores/note/edit-mode/useEditModeStore";
import { useDirectoryStore }                       from "stores/note/path/useDirectoryStore";
import { useCommonStore }                          from "./hooks/store/useCommonStore";

const SLIDE_LEFT_BUTTON_IMG_SRC = imgSrc("/arrows/first_arrow.svg");

const SLIDE_RIGHT_BUTTON_IMG_SRC = imgSrc("/arrows/end_arrow.svg");

const MANUAL_ID = "MANUAL";

const samplepath = "/sample/path";

export default function App() {

	const userId = 'SYSTEM';

	const {
		isLoading: directoryLoading,
		data     : noteHierarchy,
		error    : loadError
	} = useCommonStore(useDirectoryStore);

	const [leftVisible, setLeftVisible] = useState(true);

	const [manual, setManual] = useState(MANUAL_ID);

	/**
	 *
	 * @param id {string} note id / folder id
	 * @param type {"NOTE"|"FOLDER"}
	 */
	const clickTree = (id, type) => {
		if(type === "NOTE") {
			setManual(id);
		}
		else if(type === "FOLDER") {
			console.log(`${id} folder clicked`);
		}
	};

	const {
		fetchData: loadEditMode,
		isIdle   : editModeIdle,
		isLoading: editModeLoading,
		data     : editMode,
		error    : loadEditModeError,
		dispatch : dispatchEditMode
	} = useCommonStore(useEditModeStore);

	useEffect(() => {
		if(editModeIdle)
			loadEditMode(userId);
	}, [editModeIdle, loadEditMode, userId]);

	const changeEditMode = (modeId) => {
		dispatchEditMode({ ...editMode, selected: modeId });
	};

	return (
		<AppContainer>
			<AppHeader />
			<div className="below-header">
				<main className="app-main">

					{/* 왼쪽 폴더 메뉴 영역 */}
					<AppLeftSide leftVisible={leftVisible} userId={userId}>
						<div className="app-left-slide-header" style={{ justifyContent: leftVisible ? 'space-between' : 'center' }}>
							{leftVisible && <h1>파일찾기</h1>}
							<button className="app-left-slide-close-button" onClick={() => setLeftVisible(!leftVisible)}>
								<img src={leftVisible ? SLIDE_LEFT_BUTTON_IMG_SRC : SLIDE_RIGHT_BUTTON_IMG_SRC} alt="폴더구조 메뉴 닫기 버튼" />
							</button>
						</div>

						<hr />

						<div className="app-left-slide-body">
							{directoryLoading && "로딩중"}
							{noteHierarchy && (<Tree data={noteHierarchy} minimize={!leftVisible} onClick={clickTree} />)}
							{loadError && <ErrorIconMessage message={loadError} />}
						</div>
					</AppLeftSide>

					{/* 가운데 노트 영역 */}
					<article className="app-content">
						<div className="app-content-body">

							{/* 노트 제목 영역 */}
							<div className="app-content-header">
								<h1>노트 제목</h1>
								<div className="app-content-meta">
									{samplepath && <span>{samplepath}</span>}
									<div className="note-editmode-area">
										{editModeLoading && <span>로딩중</span>}
										{editMode && (
											<>
												<div className="note-editmode-button-mask"
												     style={{ left: `calc(100% / 3 * ${editMode.modes.findIndex(mode => mode.id === editMode.selected)})` }} />
												{editMode.modes.map(mode => (
													<div key={mode.id}
													     className="note-editmode-button"
													     onClick={() => changeEditMode(mode.id)}
													     title={mode.name}>
														<img src={imgSrc(mode.iconPath)} alt={mode.description} />
													</div>
												))}
											</>
										)}
										{loadEditModeError && <ErrorIconMessage message={loadEditModeError} />}
									</div>
								</div>
							</div>

							{/* 노트 내용 영역 */}
							<div className="note-content-area">
								{Array.from({ length: 100 }).map((_, index) => <NoteBlock key={index} blockType="text" editMode={index % 2 === 0 ? "RW" : "W"}>내용 {index}</NoteBlock>)}
							</div>

						</div>
					</article>

					{/* 오른쪽 메타데이터 영역 */}
					<AppRightSide>
						<Accordion title="메타데이터">
							<CaptionTable>
								<TableTr>
									<TableTh text="작성자"></TableTh>
									<TableTd text="SYSTEM"></TableTd>
									<TableTh text="작성일시"></TableTh>
									<TableTd autoNewline={true} text="0000.01.01 00:00:00"></TableTd>
								</TableTr>
								<TableTr>
									<TableTh text="수정자"></TableTh>
									<TableTd text="SYSTEM"></TableTd>
									<TableTh text="수정일시"></TableTh>
									<TableTd autoNewline={true} text="2026.11.21 22:46:18"></TableTd>
								</TableTr>
								<TableTr>
									<TableTh text="조회권한"></TableTh>
									<TableTd text="조회가능"></TableTd>
									<TableTh text="조회수"></TableTh>
									<TableTd text="64"></TableTd>
								</TableTr>
							</CaptionTable>
						</Accordion>
						<Accordion title="목차"></Accordion>
					</AppRightSide>

				</main>
				<AppFooter>footer</AppFooter>
			</div>
		</AppContainer>
	);
}

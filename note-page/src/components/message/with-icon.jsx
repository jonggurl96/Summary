import { imgSrc } from "../../api/asset/route/img";
import styles     from "./with-icon.module.css";

/**
 *
 * @param param0
 * @param param0.message 메시지
 * @returns {React.JSX.Element}
 * @constructor
 */
export function MessageWithIcon({ src, message, children }) {
	return (
		<div className={styles.IconMsgFrame}>
			<div className={styles.IconArea}>
				<img src={imgSrc(src)} alt={message || "안내이미지"} className={styles.IconStyle} />
			</div>
			<div className={styles.TextArea}>
				<span className={styles.TextStyle}>{message || "안내메시지"} {children}</span>
			</div>
		</div>
	);
}

export function WarningNone({ src = "/none/none_icon.svg", message = "존재하지 않습니다." }) {
	return <MessageWithIcon src={src} message={message} />;
}

export function NotAuthorizedMessage({ goBackLink = "/", src = "/warning/warning_i_red.svg", message = "접근 권한이 없습니다." }) {
	return (
		<MessageWithIcon src={src} message={message}>
			{goBackLink && <a href={goBackLink}>뒤로가기</a>}
		</MessageWithIcon>
	);
}

export function NotReadableMessage({ goBackLink, src }) {
	return <NotAuthorizedMessage goBackLink={goBackLink} src={src} message="조회 권한이 없습니다." />;
}

export function NotUpdateableMessage({ goBackLink, src }) {
	return <NotAuthorizedMessage goBackLink={goBackLink} src={src} message="수정 권한이 없습니다." />;
}

export function NotDeletableMessage({ goBackLink, src }) {
	return <NotAuthorizedMessage goBackLink={goBackLink} src={src} message="삭제 권한이 없습니다." />;
}

export function ErrorIconMessage({ src = "/danger/danger_i_big.svg", message = "에러가 발생하였습니다.", children }) {
	return <MessageWithIcon src={src} message={message}>{children}</MessageWithIcon>;
}
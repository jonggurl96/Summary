import { createPortal } from "react-dom";
import styles           from "./tooltip.module.css";

export const tooltipDuration = 0.2;

export function Tooltip({ top, left, children }) {
	return createPortal(
		<div className={styles.TooltipContainer} style={{ top, left }}>
			{children}
		</div>,
		document.body
	);
}
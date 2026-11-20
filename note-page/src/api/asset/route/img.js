const HOST = window.location.hostname;

const IMAGE_ASSET_HOST = `http://${HOST}:80/images/api/v1`;

export function imgSrc(path) {
	return `${IMAGE_ASSET_HOST}/${path}`;
}
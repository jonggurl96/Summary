const IMAGE_ASSET_HOST = process.env.IMAGE_ASSET_HOST || 'http://192.168.123.167:80/images/api/v1';

export function imgSrc(path) {
	return `${IMAGE_ASSET_HOST}/${path}`;
}
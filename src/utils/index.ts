import { readdirSync } from 'fs';
import sharp, { Sharp } from 'sharp';

export const resizeImage = async (
	fileName: string,
	width: string,
	height: string
): Promise<Sharp | undefined> => {
	const getImage = `./imgs/${fileName}.jpg`;
	try {
		const transform = await sharp(getImage);
		if (Number(width) > 0 && Number(height) > 0) {
			transform.resize(Number(width), Number(height));
		}
		return transform;
	} catch (e) {
		console.log(e);
	}
};

export const checkImageExist = async (fileName: string): Promise<boolean> => {
	const imageList = await readdirSync('./imgs');
	const imageNameList = imageList.map((image) => image.split('.')[0]);
	return imageNameList.includes(fileName);
};

export const checkImageExistInThumbs = async (
	path: string
): Promise<boolean> => {
	const imageList = await readdirSync('./thumbs');
	const imageNameList = imageList.map((image) => image.split('.')[0]);
	return imageNameList.includes(path);
};

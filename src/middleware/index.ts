import { NextFunction, Request, Response } from 'express';
import path from 'path';
import { checkImageExist, checkImageExistInThumbs } from '../utils';

export const handlerError = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	const { filename: fileName, width, height } = req.query;
	const originalPath = `${fileName}-${width}-${height}`;
	const isExistImageInThumb = await checkImageExistInThumbs(originalPath);
	if (isExistImageInThumb) {
		const options = {
			root: path.join('thumbs')
		};
		res.sendFile(`${fileName}-${width}-${height}.jpg`, options, (err) => {
			if (err) {
				next(err);
			} else {
				console.log('Sent:', fileName, 'from caching');
			}
		});
	} else {
		const isExistImage = await checkImageExist(fileName as string);
		if (!isExistImage) {
			res.send('Filename Incorrect!');
			return;
		}
		if (
			isNaN(Number(width)) ||
			isNaN(Number(height)) ||
			Number(width) <= 0 ||
			Number(height) <= 0
		) {
			res.send('Incorrect Parameters!');
			return;
		}
		next();
	}
};

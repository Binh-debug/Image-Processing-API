import express from 'express';
import { resizeImage } from '../../utils';
import { handlerError } from '../../middleware';

const imgs = express.Router();
imgs.get('/', handlerError, async (req, res) => {
	const { filename: fileName, width, height } = req.query;
	const imageTransformed = await resizeImage(
		fileName as string,
		width as string,
		height as string
	);

	imageTransformed?.toFile(
		`./thumbs/${fileName}-${width}-${height}.jpg`,
		async (err): Promise<void> => {
			if (err) {
				res.send('Had error.');
				return;
			}
			imageTransformed.toBuffer();
			imageTransformed.pipe(res.status(200));
		}
	);
});

export default imgs;

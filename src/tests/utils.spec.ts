import sharp from 'sharp';
import path from 'path';
import { checkImageExist, resizeImage } from '../utils';

describe('Check Image Exist In Img Folder', () => {
	it('Image does not exist', async () => {
		const result = await checkImageExist('noexistfile');
		expect(result).toBe(false);
	});

	it('Image Exist', async () => {
		const result = await checkImageExist('encenadaport');
		expect(result).toBe(true);
	});
});

describe('Check Error Resize', () => {
	it('Get a sharp file.', async () => {
		expect(async () => {
			await sharp(path.join('imgs/encenadaport.jpg'));
		}).not.toThrow();
	});
	it('Should resize image is correctly', async () => {
		expect(async () => {
			await resizeImage('encenadaport', '200', '200');
		}).not.toThrow();
	});
});

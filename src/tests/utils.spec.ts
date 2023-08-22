import sharp from 'sharp';
import path from 'path';
import { checkImageExist } from '../utils';

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
		const transform = sharp(path.join('imgs/encenadaport.jpg'));
		expect(async () => {
			await transform;
		}).not.toThrow();
	});
});

import { Request, Response } from 'express';

import { router } from '@constants/router';

export const createNewAds = router.post(
	'/ads',
	(_req: Request, res: Response) => {
		return res.status(201).json([]);
	}
);

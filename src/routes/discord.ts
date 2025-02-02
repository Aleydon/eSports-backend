import { Request, Response } from 'express';

import { router } from '@constants/router';

export const getDiscord = router.get(
	'/ads/:adsID/discord',
	(req: Request, res: Response) => {
		return res.status(200).json([]);
	}
);

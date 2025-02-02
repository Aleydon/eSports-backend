import { Request, Response } from 'express';

import { router } from '@constants/router';

export const getAds = router.get(
	'/games/:gameId/ads',
	(req: Request, res: Response) => {
		const { gameId } = req.params;

		return res.send(gameId);
	}
);

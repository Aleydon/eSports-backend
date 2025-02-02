import { Request, Response } from 'express';

import { router } from '@constants/router';
import { prisma } from '@constants/prisma';

export const getAds = router.get(
	'/games/:gameId/ads',
	async (req: Request, res: Response) => {
		const gameId = req.params.id;
		const ads = await prisma.ad.findMany({
			select: {
				id: true,
				name: true,
				weekdays: true,
				useVoiceChannel: true,
				yearsPlaying: true,
				hourStart: true,
				hourEnd: true
			},
			orderBy: {
				createdAt: 'desc'
			},
			where: { gameId }
		});

		return res.send(
			ads.map((ad) => ({ ...ad, weekdays: ad.weekdays.split(',') }))
		);
	}
);

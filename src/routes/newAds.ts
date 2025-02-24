import { Request, Response } from 'express';

import { router } from '@constants/router';
import { prisma } from '@constants/prisma';

export const createNewAds = router.post(
	'/games/:gameId/ads',
	async (req: Request, res: Response) => {
		const { gameId } = req.params;
		const {
			name,
			yearsPlaying,
			discord,
			weekDays,
			hourStart,
			hourEnd,
			useVoiceChannel
		} = req.body;

		const ad = await prisma.ad.create({
			data: {
				gameId,
				name,
				yearsPlaying,
				discord,
				weekdays: weekDays.join(','),
				hourStart,
				hourEnd,
				useVoiceChannel
			}
		});

		return res.status(201).json(ad);
	}
);

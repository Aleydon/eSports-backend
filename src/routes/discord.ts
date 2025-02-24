import { Request, Response } from 'express';
import { router } from '@constants/router';

import { prisma } from '@constants/prisma';

export const getDiscord = router.get(
	'/ads/:adsID/discord',
	async (req: Request, res: Response) => {
		const { adsID } = req.params;
		const ad = await prisma.ad.findUniqueOrThrow({
			select: {
				discord: true
			},
			where: { id: adsID }
		});
		return res.status(200).json({
			discord: ad.discord
		});
	}
);

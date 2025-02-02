import { prisma } from '@constants/prisma';
import { router } from '@constants/router';
import { Request, Response } from 'express';

export const getGames = router.get(
	'/games',
	async (_req: Request, res: Response) => {
		const games = await prisma.game
			.findMany({
				include: {
					ads: true
				}
			})
			.then((games) => {
				return res.status(200).json(games);
			})
			.catch((err) => {
				return res.status(500).json(err);
			});
		return res.status(200).json(games);
	}
);

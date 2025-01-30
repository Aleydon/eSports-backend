import 'cors';

import express, { Request, Response } from 'express';

const app = express();

app.get('/games', (_req: Request, res: Response) => {
	return res.json({ message: 'Hello World' });
});

app.post('/ads', (_req: Request, res: Response) => {
	return res.status(201).json([]);
});

app.get('/games/:gameId/ads', (req: Request, res: Response) => {
	const { gameId } = req.params;

	return res.send(gameId);
});

app.get('/ads/:adsID/discord', (req: Request, res: Response) => {
	return res.status(200).json([]);
});

app.listen(3333);

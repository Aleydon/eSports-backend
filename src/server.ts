import express from 'express';
import cors from 'cors';

import { getAds } from '@routes/ads';
import { getDiscord } from '@routes/discord';
import { getGames } from '@routes/listGames';
import { createNewAds } from '@routes/newAds';

const app = express();

app.use(cors());
app.use(express.json());
app.use(getGames);
app.use(createNewAds);
app.use(getAds);
app.use(getDiscord);

app.listen(3333);

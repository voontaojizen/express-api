import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
// import type { Blog } from '@core/types';
// import { returnBlogs } from '@core/utils';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: '*' }));

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

router.get('/blogs', (req: Request, res: Response) => {
  // const blogs: Blog[] = returnBlogs();
  const blogs = [];
  res.json({ blogs });
});

app.use('/api', router);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

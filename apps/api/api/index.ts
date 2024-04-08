import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

type Blog = {
  id: string;
  title: string;
  content: string;
};

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: '*' }));

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

router.get('/blogs', (req: Request, res: Response) => {
  const blogs: Blog[] = [
    { id: '1', title: 'Blog 1', content: 'Content 1' },
    { id: '2', title: 'Blog 2', content: 'Content 2' },
    { id: '3', title: 'Blog 3', content: 'Content 3' },
    { id: '4', title: 'Blog 4', content: 'Content 4' },
  ];
  res.json({ blogs });
});

// app.use('/api', router);

// app.listen(port, () => {
//   console.log(`[server]: Server is running at http://localhost:${port}`);
// });

import express, { Request, Response } from 'express';
import TodoRoute from './routes/TodoRoute';
const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Express! ');
});

app.use(express.json());

app.use('/api', TodoRoute);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

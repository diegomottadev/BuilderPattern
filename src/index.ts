// src/app.ts
import express, { Application, Request, Response } from 'express';
import StandardMazeBuilder from './builders/StandardMazeBuilder';
import CountingMazeBuilder from './builders/CountingMazeBuilder';
import MazeGame from './mazeGame/MazeGame';

const app: Application = express();
const port: number = 3000;

app.get('/', (_req: Request, res: Response) => {
  const mazeBuilder = new StandardMazeBuilder();
  const mazeGame = new MazeGame();
  const maze = mazeGame.CreateMaze(mazeBuilder);
  res.json({ maze });
});

app.get('/count', (_req: Request, res: Response) => {
  const countingBuilder = new CountingMazeBuilder();
  const mazeGame = new MazeGame();
  mazeGame.CreateMaze(countingBuilder);
  const { rooms, doors } = countingBuilder.getCounts();
  res.json({ rooms, doors });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

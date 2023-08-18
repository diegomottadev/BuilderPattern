// src/mazeGame/MazeGame.ts
import MazeBuilder from '../builders/MazeBuilder';
import Maze from '../models/Maze';

class MazeGame {
  CreateMaze(builder: MazeBuilder): Maze {
    builder.buildMaze();
    builder.buildRoom(1);
    builder.buildRoom(2);
    builder.buildDoor(1, 2);

    return builder.getMaze();
  }

  CreateComplexMaze(builder: MazeBuilder): Maze {
    builder.buildMaze();
    builder.buildRoom(1);
    builder.buildRoom(1001);
    // ... Build more rooms and doors as needed

    return builder.getMaze();
  }
}

export default MazeGame;

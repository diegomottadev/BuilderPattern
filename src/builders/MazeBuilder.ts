// src/builders/MazeBuilder.ts
import Maze from '../models/Maze';

abstract class MazeBuilder {
  abstract buildMaze(): void;
  abstract buildRoom(roomNumber: number): void;
  abstract buildDoor(roomFrom: number, roomTo: number): void;
  abstract getMaze(): Maze;
}

export default MazeBuilder;

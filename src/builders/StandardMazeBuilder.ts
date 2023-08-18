// src/builders/StandardMazeBuilder.ts
import MazeBuilder from './MazeBuilder';
import Maze from '../models/Maze';
import Room from '../models/Room';
import Door from '../models/Door';
import Wall from '../models/Wall';

class StandardMazeBuilder extends MazeBuilder {
    private currentMaze: Maze;

    constructor() {
        super();
        this.currentMaze = new Maze();
    }

    buildMaze(): void {
        this.currentMaze = new Maze();
        // Build the maze structure
    }

    buildRoom(roomNumber: number): void {
        if (!this.currentMaze.hasRoom(roomNumber)) {
            const room = new Room(roomNumber);
            this.currentMaze.addRoom(room);

            room.setSide("North", new Wall());
            room.setSide("South", new Wall());
            room.setSide("East", new Wall());
            room.setSide("West", new Wall());
        }
    }

    buildDoor(roomFrom: number, roomTo: number): void {
        if (this.currentMaze) {
            const room1 = this.currentMaze.getRoom(roomFrom);
            const room2 = this.currentMaze.getRoom(roomTo);
            if (room1 && room2) {
                const door = new Door(room1, room2);
                // Build the door and add it to the maze
                this.currentMaze.addDoor(door);
            }
        }
    }

    getMaze(): Maze {
        return this.currentMaze;
    }
}

export default StandardMazeBuilder;

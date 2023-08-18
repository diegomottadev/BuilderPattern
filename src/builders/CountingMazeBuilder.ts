// src/builders/CountingMazeBuilder.ts
import MazeBuilder from './MazeBuilder';
import Maze from '../models/Maze';
import Room from '../models/Room';
import Wall from '../models/Wall';
import Door from '../models/Door';

class CountingMazeBuilder extends MazeBuilder {
    private currentMaze: Maze;
    private roomsCount: number = 0;
    private doorsCount: number = 0;

    constructor() {
        super();
        this.roomsCount = this.doorsCount = 0;
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

            this.roomsCount++; // Increment rooms count
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
                this.doorsCount++; // Increment doors count
            }
        }
    }

    getMaze(): Maze {
        return this.currentMaze;
    }

    getCounts(): { rooms: number; doors: number } {
        return {
            rooms: this.roomsCount,
            doors: this.doorsCount,
        };
    }
}

export default CountingMazeBuilder;

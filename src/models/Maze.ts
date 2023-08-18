import Door from "./Door";
import Room from "./Room";

class Maze {
    private rooms: Map<number, Room> = new Map();
    private doors: Door[] = [];

    addRoom(room: Room): void {
        this.rooms.set(room.getRoomNumber(), room);
    }

    getRoom(roomNumber: number): Room | undefined {
        return this.rooms.get(roomNumber);
    }

    addDoor(door: Door): void {
        this.doors.push(door);
    }

    roomNo(roomNumber: number): Room | null {
        return this.rooms.get(roomNumber) || null;
    }

    // Implementing the HasRoom method
    hasRoom(roomNumber: number): boolean {
        return this.roomNo(roomNumber) !== null;
    }
}

export default Maze;

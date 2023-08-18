// src/models/Room.ts

import Wall from "./Wall";

class Room {
    private roomNumber: number;
    private sides: Record<string, Wall | null> = {};

    constructor(roomNumber: number) {
        this.roomNumber = roomNumber;
    }

    getRoomNumber(): number {
        return this.roomNumber;
    }
    getSide(direction: string): Wall | null {
        return this.sides[direction] || null;
    }

    setSide(direction: string, wall: Wall): void {
        this.sides[direction] = wall;
    }
    // Other methods and properties of the Room class
}

export default Room;


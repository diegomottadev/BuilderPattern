// src/models/Door.ts
import Room from './Room';

class Door {
    private room1: Room;
    private room2: Room;

    constructor(room1: Room, room2: Room) {
        this.room1 = room1;
        this.room2 = room2;
    }

    getRoom1(): Room {
        return this.room1;
    }

    getRoom2(): Room {
        return this.room2;
    }

    // Other methods and properties of the Door class
}

export default Door;

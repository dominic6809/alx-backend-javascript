/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */

import ClassRoom from './0-classroom.js';

// Function to initialize and return an array of ClassRoom objects
export default function initializeRooms() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}

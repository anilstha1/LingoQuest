import React from 'react';
import "./activeroom.css";
import Card from './Card';

const Activeroom = () => {
  const rooms = [
    { id: 1, name: 'Room 1', description: 'Description of Room 1' },
    { id: 2, name: 'Room 2', description: 'Description of Room 2' },
    { id: 3, name: 'Room 3', description: 'Description of Room 3' },
  ];

  return (
    <div className="container">
      {rooms.map((room) => (
        <Card key={room.id} name={room.name} description={room.description} />
      ))}
    </div>
  );
};

export default Activeroom;

import React from 'react';
import Card from './Card';
import './App.css';

const App = () => {
  const vacationSpots = [
    {
      place: "Meridian, Idaho",
      price: 40,
      timeToGo: "Spring"
    },{
      place: "Cancun",
      price: 900,
      timeToGo: "Winter"
    },{
      place: "China",
      price: 1200,
      timeToGo: "Fall"
    },{
      place: "Russia",
      price: 1100,
      timeToGo: "Summer"
    },{
      place: "Lebanon",
      price: 400,
      timeToGo: "Spring"
    }
  ]

  return (
    <div className='App'>
      {vacationSpots.map(v => <Card place={v.place} price={v.price} time={v.timeToGo} />)}
    </div>
  );
}

export default App;

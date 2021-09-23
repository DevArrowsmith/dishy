import './App.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [position, setPosition] = useState({
    latitude: '',
    longitude: ''
  });
  const [error, setError] = useState(null);

  const getPosition = ({ coords }) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude
    });
  };

  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError("Geolocation is not supported");
      return;
    } else {
      geo.getCurrentPosition(getPosition);
    }
  }, []);
  return (
    <>
    {position.latitude && position.latitude}
    {error && error}
    </>
  );
};


export default App;

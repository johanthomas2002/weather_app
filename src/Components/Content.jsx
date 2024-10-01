import React, { useState } from 'react';
import { Button, Card, Form, ListGroup } from 'react-bootstrap';

function Content() {
  const [place, setPlace] = useState("");
  const [weather, setWeather] = useState({});

  console.log(weather);

  const findWeather = async () => {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=6e453d90eab94b97a9155701240110&q=${place}&aqi=no`);
    
    if (response.status === 200) {
      const data = await response.json(); // Add await here
      setWeather(data);
    }
  };

  return (
    <div>
      <div className="container w-50 bg-warning mt-5 p-5" style={{ borderRadius: "10px" }}>
        <Form.Control
          type="text"
          placeholder="Enter the Location"
          className='fs-5'
          onChange={(e) => setPlace(e.target.value)}
        />

        <div className='text-center mt-5'>
          <Button variant="danger fs-5" onClick={findWeather}>Submit</Button>
        </div>
      </div>

      <div className="container w-25 bg-warning mt-5 p-5">
        <Card style={{ width: '18rem', backgroundColor: "black" }}>
          <ListGroup variant="flush">
            {weather.current ? (
              <>
                <ListGroup.Item className='fs-5'>Temperature: {weather.current.temp_c} °C</ListGroup.Item>
                <ListGroup.Item className='fs-5'>Feels Like: {weather.current.feelslike_c} °C</ListGroup.Item>
                <ListGroup.Item className='fs-5'>Humidity: {weather.current.humidity} %</ListGroup.Item>
              </>
            ) : (
              <ListGroup.Item className='fs-5'>No weather data available</ListGroup.Item>
            )}
          </ListGroup>
        </Card>
      </div>
    </div>
  );
}

export default Content;

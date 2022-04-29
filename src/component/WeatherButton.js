import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";

const WeatherButton = ({ cities, selectedCity, handleCityChange }) => {
  return (
    <div className="menu-container">
      <Button
        variant={`${selectedCity == null ? "outline-primary" : "primary"}`}
        onClick={() => handleCityChange("current")}
      >
        Current Location
      </Button>

      {cities.map((city) => (
        <Button
          variant={`${selectedCity == city ? "outline-info" : "info"}`}
          onClick={() => handleCityChange(city)}
        >
          {city}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;

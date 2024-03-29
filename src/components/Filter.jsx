import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [city, setCity] = useState(searchParams.get("city") || "");
  const [age, setAge] = useState(searchParams.get("age") || "");

  const handleCityChange = (e) => {
    const newCity = e.target.value;
    setCity(newCity);
    setSearchParams({ city: newCity, age });
  };

  const handleAgeChange = (e) => {
    const newAge = e.target.value;
    setAge(newAge);
    setSearchParams({ city, age: newAge });
  };

  return (
    <>
      <h1>Filter Page</h1>
      <h4>Age is: {age}</h4>
      <h4>City is: {city}</h4>
      <input
        type="text"
        placeholder="enter city name"
        value={city}
        onChange={handleCityChange}
      />
      <input
        type="text"
        placeholder="enter age"
        value={age}
        onChange={handleAgeChange}
      />
    </>
  );
};

export default Filter;

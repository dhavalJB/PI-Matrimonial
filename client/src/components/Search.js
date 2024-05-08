import React, { useState, useEffect } from "react";
import "./css/Search.css";

function Search() {
  const [searchData, setSearchData] = useState({
    keyword: "",
    gender: "",
    age: "",
    education: "",
    religion: "",
    country: "",
    state: "",
  });
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSearchData({ ...searchData, country: country });
    const selectedCountry = countries.find(
      (item) => item.name.common === country
    );
    if (selectedCountry) {
      setStates(selectedCountry.states || []);
    } else {
      setStates([]);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData({
      ...searchData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send searchData to your backend for processing
    console.log(searchData);
  };

  return (
    <div className="search-form">
      <br/>
      <h2>Search Form</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="keyword"
          placeholder="Enter keyword..."
          value={searchData.keyword}
          onChange={handleChange}
        />
        <select
          name="gender"
          value={searchData.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <select name="age" value={searchData.age} onChange={handleChange}>
          <option value="">Select Age</option>
          <option value="18-25">18 - 25</option>
          <option value="26-35">26 - 35</option>
          <option value="36-45">36 - 45</option>
          <option value="46+">46+</option>
        </select>
        <select
          name="education"
          value={searchData.education}
          onChange={handleChange}
        >
          <option value="">Select Education</option>
          <option value="High School">High School</option>
          <option value="Bachelor's Degree">Bachelor's Degree</option>
          <option value="Master's Degree">Master's Degree</option>
          <option value="PhD">PhD</option>
          {/* Add more options as needed */}
        </select>
        <select
          name="religion"
          value={searchData.religion}
          onChange={handleChange}
        >
          <option value="">Select Religion</option>
          <option value="Hindu">Hindu</option>
          <option value="Muslim">Muslim</option>
          <option value="Christian">Christian</option>
          <option value="Sikh">Sikh</option>
          {/* Add more options as needed */}
        </select>
        <select
          name="country"
          value={searchData.country}
          onChange={handleCountryChange}
        >
          <option value="">Select Country</option>
          {countries.map((country, index) => (
            <option key={index} value={country.name.common}>
              {country.name.common}
            </option>
          ))}
        </select>
        <select name="state" value={searchData.state} onChange={handleChange}>
          <option value="">Select State</option>
          {states.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;

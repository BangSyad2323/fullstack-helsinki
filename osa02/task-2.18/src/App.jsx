import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [allCountry, setAllCountry] = useState(null);
  const [filterCountry, setFilterCountry] = useState("");
  const [openDetailCountry, setOpenDetailCountry] = useState(false)

  console.log("allCountry", allCountry);
  console.log("filterCountry", filterCountry);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        console.log("response.data", response.data);
        setAllCountry(response.data);
      });
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setFilterCountry(value);
  };

  if (!allCountry) {
    return <div>loading</div>;
  }

  const contryToShow =
    allCountry.filter((country) => {
      const targetLowercase = country?.name?.common?.toLowerCase() || "";
      const valueLowercase = filterCountry.toLowerCase();
      return targetLowercase.includes(valueLowercase);
    }) || [];

  return (
    <div>
      <p>find countries</p>
      <input type="text" onChange={handleChange} />
      <div>
        {contryToShow.length === 1 && (
          <div>
            <h1>{contryToShow[0].name.common}</h1>
            <h2>Capital : {contryToShow[0].capital}</h2>
            <h3>area : {contryToShow[0].area}</h3>

            <p>Language: </p>
            <div>
              {Object.values(contryToShow[0].languages).map((lang) => (
                <li key={lang}>{lang}</li>
              ))}
            </div>

            <div>
              <img src={contryToShow[0].flags.png} alt="flags" width={300} />
            </div>
          </div>
        )}

        {contryToShow.length > 10 && <p>To many Country</p>}

        {contryToShow.length > 1 && contryToShow.length <= 10 && (
          <div>
            {contryToShow.map((country) => (
              <div>
                <p key={country.name.common}>{country.name.common}</p>
                <button onClick={()=> setFilterCountry(country.name.common)}>show</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

import "./Country.css";

const Country = (props) => {
  return (
    <li>
      <div className="countryFlagContainer">
        <img src={props.flag} alt="flaga"></img>
      </div>
      <h2>{props.name}</h2>
      <span>
        <strong>Population:</strong> {props.population}
      </span>
      <span>
        <strong>Region: </strong> {props.region}
      </span>
      <span>
        <strong>Capital: </strong>
        {props.capital}
      </span>
    </li>
  );
};

export default Country;

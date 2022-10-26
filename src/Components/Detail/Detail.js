// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const Detail = () => {
//   const [data, setData] = useState([]);

//   const { name } = useParams();

//   const getData = async () => {
//     const url = `https://restcountries.com/v3.1/name/${name}`;

//     const response = await fetch(url);
//     const responseJson = await response.json();

//     setData({
//       name: responseJson.name.common,
//       native_name: responseJson.name.official,
//       popolation: responseJson.population.toLocalString(),
//       region: responseJson.region,
//       subregion: responseJson.subregion,
//       capital: responseJson.capital,
//       tld: responseJson.tld[0],
//       currencies: Object.values(responseJson.currencies)
//         .map((currency) => currency.name)
//         .join(", "),
//       languages: Object.values(responseJson.languages).join(", "),
//       borders: responseJson.borders,
//       flagImg: responseJson.flags.png,
//     });
//   };

//   useEffect(
// fetch(`https://restcountries.com/v3.1/name/${name}`)
//   .then((res) => res.json())
//   .then((res) =>
//     setData({
//       name: res.name.common,
//       native_name: res.name.official,
//       popolation: res.population.toLocalString(),
//       region: res.region,
//       subregion: res.subregion,
//       capital: res.capital,
//       tld: res.tld[0],
//       currencies: Object.values(res.currencies)
//         .map((currency) => currency.name)
//         .join(", "),
//       languages: Object.values(res.languages).join(", "),
//       borders: res.borders,
//       flagImg: res.flags.png,
//     })
//     getData(),
//     [data]
//   );

//   return (
// <div>
//   <button>Back</button>
//   <div className="img-container"></div>
//   <div className="data-container">
//     <h2>Country Name</h2>
//     <section>
//       <span>
//         <strong>Native Name: </strong>
//         {data.native_name}
//       </span>
//       <span>
//         <strong>Population: </strong>
//         {data.population}
//       </span>
//       <span>
//         <strong>Region: </strong>
//         {data.region}
//       </span>
//       <span>
//         <strong>Sub Region: </strong>
//         {data.subregion}
//       </span>
//       <span>
//         <strong>Capital: </strong>
//         {data.capital}
//       </span>
//       <span>
//         <strong>Top Level Domain: </strong>
//         {data.tld}
//       </span>
//       <span>
//         <strong>Currencies: </strong>
//         {data.currencies.map((currency) => currency.name)}
//       </span>
//       <span>
//         <strong>Languages: </strong>
//         {data.languages}
//       </span>
//     </section>
//   </div>
// </div>
//   );
// };

// export default Detail;

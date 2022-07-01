const cities = [
  { city: "Barcelona", country: "Spain", countryCode: "ES" },
  { city: "Madrid", country: "Spain", countryCode: "ES" },
  { city: "Buenos Aires", country: "Argentina", countryCode: "AR" },
  { city: "Lisboa", country: "Portugal", countryCode: "PT" },
];

export const getCities = () => cities;

export const getCountryNameByCountryCode = (countryCode) =>
  cities.filter((c) => c.countryCode === countryCode)[0].country;

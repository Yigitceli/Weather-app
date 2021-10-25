import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

export const getWeathers = async () => {
  let datas = [];
  const cities = ["London", "New York", "Ankara", "Paris"];
  for (let index = 0; index < cities.length; index++) {
    const element = cities[index];
    const { data } = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${element}&days=5&aqi=no&alerts=no`
    );
    datas.push(data);
  }
  return datas;
};

export const getOneWeather = async (city) => {
  const { data } = await axios.get(
    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5&aqi=no&alerts=no`
  );
  return data;
};

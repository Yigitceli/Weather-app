import axios from "axios";

const apiKey = "b1ebaef5af407fdc9de667b9eeffd94e";

export const getWeathers = async () => {
  let datas = [];
  const cities = ["London", "New York", "Ankara", "Paris"];
  for (let index = 0; index < cities.length; index++) {
    const element = cities[index];
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${element}&appid=${apiKey}`
    );
    datas.push(data);
  }
  return datas;
};

const location = "bogota,col";
const api_key = "64e3f952fd7c0790cac21a5a740e6376";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";
export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

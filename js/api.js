const API_KEY = "8f84d51bcab1852dcade6d30d1e57566"
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

// sehir durumuna gore verileri al
export const getWeatherData = async (city, units = "metric")=>{

    //tam yolu olustur
    const url= `${BASE_URL}?q=${city}&units=${units}&appid=${API_KEY}&lang=tr`

    //api istek atmak
    const res = await fetch(url)

    //gelen response dan json verisini al
    const data = await res.json()

    console.log(data)

    return data
};

//coordinatima gore veri al
export const getWeatherByCoords = async (lat, lon, units = "metric") => {
  const url = `${BASE_URL}?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`;

  const res = await fetch(url);

  return res.json();
};

//bayrak istegi
export const getFlagUrl = (countryCode) => `https://flagcdn.com/108x81/${countryCode.toLowerCase()}.png`

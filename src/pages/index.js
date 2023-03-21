import Head from "next/head";
import Image from "next/image";
import axios from 'axios';
import { useState } from "react";
import { RiSearchEyeFill } from "react-icons/ri";
import meteoAli from '../../public/images/meteoali.png'
import Spinner from '../components/Spinner'
import Weather from '../components/Weather'

export default function Home() {

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`


  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((res) => {
      setWeather(res.data);
      console.log(res.data)
    });
    setCity('');
    setLoading(false);
  }

  if (loading) {
return <Spinner/>
  }else {

    return (
      <>
        <Head>
          <title>Weather Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
     
        <div className=' h-1/5 w-1/5 mx-auto '>
            <Image className="pt-7" src={meteoAli} alt={"meteo"} />
          </div>
        <div className="flex mt-10 justify-center h-screen ">
          <div className="bg-transparent text-white font-bold rounded-lg  w-3/4 h-3/6">
          <form  onSubmit={fetchWeather}>    
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div className="relative ">
          <div className="absolute inset-y-0 left-0 flex  items-center pl-3 pointer-events-none ">
              <RiSearchEyeFill className="w-5 h-5 text-gray-400" aria-hidden="true" />
          </div>
          <input onChange={(e)=> setCity(e.target.value)} type="search" id="default-search" className=" block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Entrez la ville de votre choix" required/>
          <button onClick={fetchWeather} className="text-white absolute right-2.5 bottom-2.5 bg-pink-400 hover:bg-pink-500  focus:ring-pink-400 font-medium rounded-lg text-sm px-4 py-2 ">Rechercher</button>
      </div>
  </form>
  {/* weather card */}
  {weather.main && <Weather data={weather}/>}
          </div>
        </div>
      </>
    );
  }

}

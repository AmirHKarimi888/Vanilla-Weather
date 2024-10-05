import useGeolocation from "../hooks/useGeolocation";
import useLocalTime from "../hooks/useLocalTime";
import useWeatherData from "../hooks/useWeatherData";

const { getGeolocation } = useGeolocation();
const { getLocalTime } = useLocalTime();
const { getWeatherData } = useWeatherData();

class store {
    weatherData = {};
    thisLocInfo = {};
    thisLocTime = {};
    now = "";
    today = "";

    timerCounter = 0;

    getLocationInfo = async (lat, lon) => {
        await getGeolocation(lat, lon)
        .then(async () => {
            await getLocalTime(lat, lon)
            .then(async () => {
                await getWeatherData(this.thisLocInfo?.city);
            })
        })
    }

    getLocationInfoByCityName = async (cityName) => {
        await getWeatherData(cityName)
        .then(async () => {
            await getGeolocation(this.weatherData?.city?.coord?.lat, this.weatherData?.city?.coord?.lon)
            .then(async () => {
                await getLocalTime(this.weatherData?.city?.coord?.lat, this.weatherData?.city?.coord?.lon);
            })
        })
    }
}

export default new store();
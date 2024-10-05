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

    getLocationInfo = async (lat, lon) => {
        await getGeolocation(lat, lon)
        .then(async () => {
            await getLocalTime(lat, lon)
            .then(async () => {
                await getWeatherData(this.thisLocInfo?.city);
            })
        })
    }
}

export default new store();
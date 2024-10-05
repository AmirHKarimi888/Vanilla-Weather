import store from "../store";

export default function () {

    const getLocalTime = async (lat, lon) => {
        await fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=9VQU3K6PY4IN&format=json&by=position&lat=${lat}&lng=${lon}`)
        .then(res => res.json())
        .then(data => store.thisLocTime = data)
        .then(() => console.log(store.thisLocTime))
    }

    return { getLocalTime };
}
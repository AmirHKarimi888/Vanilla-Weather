import store from "../store";

export default function () {

    const getGeolocation = async (lat, lon) => {
        await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`)
        .then(res => res.json())
        .then(data => store.thisLocInfo = data)
        .then(() => console.log(store.thisLocInfo))
    }

    return { getGeolocation };
}
import { AppStructure } from "../AppStructure";

class TodayWeather extends AppStructure {

    handleEvents () {

    }

    generateHTML () {
        setTimeout(() => this.handleEvents());
        return /*html*/`
        <div id="TodayWeatherTemp"></div>
        <div id="TodayWeatherStatus"></div>
        <div id="TodayWeatherOthers"></div>
        `
    }

    render () {
        this.select("#TodayWeather").innerHTML = "";
        this.select("#TodayWeather").insertAdjacentHTML("beforeend", this.generateHTML());
    }
}

export default new TodayWeather();
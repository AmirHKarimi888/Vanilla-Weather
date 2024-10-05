import { AppStructure } from "../AppStructure";

class TodayWeatherTemp extends AppStructure {

    handleEvents () {

    }

    generateHTML () {
        setTimeout(() => this.handleEvents());
        return /*html*/``
    }

    render () {
        this.select("#TodayWeatherTemp").innerHTML = "";
        this.select("#TodayWeatherTemp").insertAdjacentHTML("beforeend", this.generateHTML());
    }
}

export default new TodayWeatherTemp();
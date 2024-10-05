import { AppStructure } from "../AppStructure";

class TodayWeatherOthers extends AppStructure {

    handleEvents () {

    }

    generateHTML () {
        setTimeout(() => this.handleEvents());
        return /*html*/``
    }

    render () {
        this.select("#TodayWeatherOthers").innerHTML = "";
        this.select("#TodayWeatherOthers").insertAdjacentHTML("beforeend", this.generateHTML());
    }
}

export default new TodayWeatherOthers();
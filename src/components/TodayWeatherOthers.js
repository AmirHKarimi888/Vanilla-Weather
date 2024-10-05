import { AppStructure } from "../AppStructure";

class TodayWeatherOthers extends AppStructure {

    handleEvents () {

    }

    generateHTML () {
        setTimeout(() => this.handleEvents());
        return /*html*/`
        <div class="flex flex-col items-center"></div>
        `
    }

    render () {
        this.select("#TodayWeatherOthers").innerHTML = "";
        this.select("#TodayWeatherOthers").insertAdjacentHTML("beforeend", this.generateHTML());
    }
}

export default new TodayWeatherOthers();
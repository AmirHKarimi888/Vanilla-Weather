import { AppStructure } from "../AppStructure";
import store from "../store";

class CityInfoName extends AppStructure {

    handleEvents () {

    }

    generateHTML () {
        setTimeout(() => this.handleEvents());
        return /*html*/`${store.thisLocInfo?.city}`
    }

    render () {
        this.select("#CityInfoName").innerHTML = "";
        this.select("#CityInfoName").insertAdjacentHTML("afterbegin", this.generateHTML());
    }

}

export default new CityInfoName();
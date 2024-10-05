import { AppStructure } from "../AppStructure";
import useDate from "../hooks/useDate";
import store from "../store";

const { months, getDate } = useDate();

class CityInfoDate extends AppStructure {

    handleEvents () {
        const date = getDate(store.thisLocTime?.formatted);
        store.today = `${+date[2]} ${months[+date[1] - 1]}, ${date[0]}`;
        this.select("#CityInfoDate").innerHTML = store.today;
    }

    generateHTML () {
        setTimeout(() => this.handleEvents());
        return /*html*/`${store.today}`
    }

    render () {
        this.select("#CityInfoDate").innerHTML = "";
        this.select("#CityInfoDate").insertAdjacentHTML("afterbegin", this.generateHTML());
    }

}

export default new CityInfoDate();
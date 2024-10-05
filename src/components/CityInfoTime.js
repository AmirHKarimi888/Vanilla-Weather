import { AppStructure } from "../AppStructure";
import useDate from "../hooks/useDate";
import store from "../store";

const { getTime } = useDate();

class CityInfoTime extends AppStructure {

    handleEvents () {
        const time = getTime(store.thisLocTime?.formatted);
        store.now = `${time[0]}:${time[1]}:${time[2]}`;

        setInterval(() => {
            if (+time[2] < 59) {
                time[2] = +time[2] + 1;
                time[2] < 10 ? time[2] = `0${time[2]}` : null;

            } else {
                time[2] = "00";
                time[1] = +time[1] + 1;
                time[1] < 10 ? time[1] = `0${time[1]}` : null;

                if (+time[1] === 60) {
                    time[1] = "00";
                    time[0] = +time[0] + 1;
                    time[0] < 10 ? time[0] = `0${time[0]}` : null;
                    
                    if (+time[0] === 24) {
                        time[0] = "00";
                    }
                }
            }

            store.now = `${time[0]}:${time[1]}:${time[2]}`;
            this.select("#CityInfoTime").innerHTML = store.now;
        }, 1000)
    }

    generateHTML () {
        setTimeout(() => this.handleEvents());
        return /*html*/`${store.now}`
    }

    render () {
        this.select("#CityInfoTime").innerHTML = "";
        this.select("#CityInfoTime").insertAdjacentHTML("afterbegin", this.generateHTML());
    }

}

export default new CityInfoTime();
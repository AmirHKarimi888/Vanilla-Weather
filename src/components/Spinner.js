import { AppStructure } from "../AppStructure";

class Spinner extends AppStructure {

    handleEvents () {
        const Spinner = document.querySelector("#Spinner");
        //Spinner.addEventListener("change", () => console.log(Spinner.value));
    }

    render () {
        setTimeout(() => this.handleEvents());
        return /*html*/`
        <div id="Spinner">
        <div class="relative">
        <div class="w-10 h-10 border-lime-200 border-2 rounded-full"></div>
        <div class="w-10 h-10 border-lime-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
    </div>
        </div>
        `
    }
}

export default new Spinner();
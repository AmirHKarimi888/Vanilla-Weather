import { AppStructure } from "../AppStructure";

class ModeBtn extends AppStructure {

    handleEvents () {
      this.select("body").classList.add("dark:bg-zinc-900");

      if ("theme" in localStorage) {
        if (localStorage.getItem("theme") === "light") {
          document.documentElement.classList.remove("dark");
          this.select("#ModeBtn input").checked = false;
          
        } else if (localStorage.getItem("theme") === "dark") {
          document.documentElement.classList.add("dark");
          this.select("#ModeBtn input").checked = true;
        }

      } else {
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
      }

      this.select("#ModeBtn input").addEventListener("click", () => {

        if (localStorage.getItem("theme") === "light") {
          localStorage.setItem("theme", "dark");
          document.documentElement.classList.add("dark");
          this.select("#ModeBtn input").checked = true;

        } else if (localStorage.getItem("theme") === "dark") {
          localStorage.setItem("theme", "light");
          document.documentElement.classList.remove("dark");
          this.select("#ModeBtn input").checked = false;
        }

      })
    }

    render () {
        setTimeout(() => this.handleEvents());
        return /*html*/`
        <div id="ModeBtn">
        <label
          class="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-blue-600"
        >
          <input class="peer sr-only" id="AcceptConditions" type="checkbox" />
          <span
            class="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-gray-300 ring-[6px] ring-inset ring-white transition-all peer-checked:start-8 peer-checked:w-2 peer-checked:bg-white peer-checked:ring-transparent"
          ></span>
        </label>
        
        </div>
        `
    }
}

export default new ModeBtn();
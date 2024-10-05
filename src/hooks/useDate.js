// export default function () {
//     const year = new Date().getFullYear();
//     const month = new Date().getMonth() + 1;
//     const day = new Date().getDate();

//     const hour = new Date().getHours();
//     let time = "";
//     if (hour >= 21) {
//         time = `21:00:00`;
//     } else if (hour >= 18) {
//         time = `18:00:00`;
//     } else if (hour >= 15) {
//         time = `15:00:00`;
//     } else if (hour >= 12) {
//         time = `12:00:00`;
//     } else if (hour >= 9) {
//         time = `09:00:00`;
//     } else if (hour >= 6) {
//         time = `06:00:00`;
//     } else if (hour >= 3) {
//         time = `03:00:00`;
//     } else if (hour >= 0) {
//         time = `00:00:00`;
//     }

//     const weatherDate = `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day} ${time}`;

//     return { weatherDate };
// }


export default function () {

    const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const getTime = (formattedDate) => {
        return formattedDate.split(" ")[1].split(":");
    }

    const getDate = (formattedDate) => {
        return formattedDate.split(" ")[0].split("-");
    }

    return { months, getTime, getDate };
}
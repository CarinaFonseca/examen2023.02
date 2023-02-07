import {User} from "./modules/User.js";
const colorContainer = document.querySelector("main");
const generate = async (e) => {
        const reponse = await fetch("https://randomuser.me/api/?results=20");
        const {results} = await reponse.json();
        console.log(results[0]);
        const user = new User(`${results[0].name.first}`, `${results[0].dob.age}`,  `${results[0].email}`);
        user.display();
}
generate();
console.log(user);
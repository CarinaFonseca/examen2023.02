export class User {

    constructor(name, age, email, photo, etatUser){
        // Créer une ou plusieurs propriétés contenant les informations d’un utilisateur
        this.name = name;
        this.age = age;
        this.email = email;
        this.photo = photo;
        // Une propriété indiquant si l’utilisateur est présent ou non. Celle-ci devrait être false par défaut.
        this.etatUser = false;
        // Une propriété se référant à l’élément utilisateur qui sera généré par la méthode décrite directement ci-dessous. 
        this.element = this.#render();
    }
    #render(){
        const main = document.querySelector("main");
        const containerElement = document.createElement("div");
        containerElement.classList.add("user");
        containerElement.dataset.present = this.etatUser;
        const childHTML = `
		    <img src="${this.photo}">
		    <div class="user--info">
				<h1>${this.name}</h1>
				<p>${this.age} years old</p>
				<p>${this.email}</p>
		    </div>
            <a href="${this.email}">
				<span class="mail">✉️</span>
		    </a>
            `;
        containerElement.insertAdjacentHTML("afterbegin", childHTML);
        main.appendChild(containerElement);
        console.log(containerElement);
    }
    display() {
        const user = document.querySelector(".user");
        user.addEventListener("click", (e) => {
            if(this.etatUser === true){
                user.style.backgroundColor = "white";
                this.etatUser = false;
                console.log(this.etatUser);
            }else{
                user.style.backgroundColor ="green";
                this.etatUser = true;
                console.log(this.etatUser);
            }
        });
    }
}
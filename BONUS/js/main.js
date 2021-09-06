/* Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data. */

Vue.config.devtools = true;

const app = new Vue(
    {
        el: "#root",
        data: {
            message: "Ciao",
            name: "John",
            lastname: "Doe",
            image: "img/img1.jpg",
        },
        methods: {
            viewImage() {
                (this.image == "img/img1.jpg") ? this.image = "img/img2.jpg" : this.image ="img/img1.jpg";
            }
        }
    }
);


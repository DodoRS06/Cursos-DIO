class hero{
    constructor(name, age, type){
        this.name = name,
        this.age = age,
        this.type = type
    }

    attack(){
        let ataque;
        switch(this.type){
            case "mago":
                ataque = "uma magia"
            break
            case "guerreiro":
                ataque = "uma espada"
            break
            case "monge":
                ataque = "uma artes marciais"
            break
            case "ninja":
                ataque = "uma shuriken"
            break
            default:
                ataque = "um ataque desconhecido"
            break
        }
        console.log(`O ${this.type} ${this.name} de ${this.age} anos atacou usando ${ataque}.`)
    }
}

let heroi = new hero("Douglas", 24, "mago");
let heroi2 = new hero("Leo", 53, "guerreiro");
let heroi3 = new hero("Marie", 84, "monge");
let heroi4 = new hero("Grazi", 35, "ninja");
let heroi5 = new hero("Felipe", 28, "professor");

heroi.attack();
heroi2.attack();
heroi3.attack();
heroi4.attack();
heroi5.attack();

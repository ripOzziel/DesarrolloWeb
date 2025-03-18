import { TopLevel } from "../interfaces/smae-interface"

function ob(input: string){
    fetch('../../data/smae.json')
    .then(x => x.json())
    .then((body: TopLevel[]) => {
        const data = body.filter(x => x.Categoría == input)
        console.log(data)
    })
}

ob("Frutas")
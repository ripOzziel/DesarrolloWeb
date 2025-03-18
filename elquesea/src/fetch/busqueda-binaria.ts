/*
function busquedaBinaria(input: string){
    fetch('../../data/smae.json')
        .then(prom => prom.json())
        .then((body: TopLevel[] ) => {
            console.log(body)
            //body es el vector de objetos
            //input es el string que se busca
            //body.lengt es el tamaño del vector

            let inicio = 0;
            let fin = body.length - 1;
            //let mitad = Math.floor((inicio + fin) / 2);
            let mitad 
            while(inicio <= fin){
                mitad = Math.round(((fin - inicio) / 2) + inicio);
                //console.log(mitad)
                if(body[mitad].Alimento == input){
                    return mitad
                }
                else if (input < body[mitad].Alimento){
                    fin = mitad - 1;
                }
                else{
                    inicio = mitad + 1;
                }
            
            }
            return -1;

        })
}

console.log(busquedaBinaria("Lechuga"))
*/
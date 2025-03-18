import { TopLevel } from '../interfaces/smae-interface';

function mostrarAlimentos(){
    fetch('../data/smae.json')
        .then((res)=> res.json())
        .then((body: [TopLevel])=>{

            const body2 = body.map((item)=>{
                const alimento  = item.Alimento;
                return {alimento}
            
                
            })
            console.log(body2)
            
        })
    }
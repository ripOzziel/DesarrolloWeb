import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import { TopLevel } from "./interfaces/smae-interface";

const firebaseConfig = {
  apiKey: "AIzaSyArwGYqR2ejv87qsJy9h0idkWoPrHJ38Kc",
  authDomain: "script-fd6bd.firebaseapp.com",
  databaseURL: "https://script-fd6bd-default-rtdb.firebaseio.com",
  projectId: "script-fd6bd",
  storageBucket: "script-fd6bd.firebasestorage.app",
  messagingSenderId: "48414488259",
  appId: "1:48414488259:web:c24210a3163deae25b1476"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dataRef = ref(db, '/');    

//Creacion de dom
const txtarea =document.createElement("textarea")

export function MostrarAlimentosFirebase() {
  get(dataRef).then((snapshot) => {
    
    if (snapshot.exists()) {
      const valor =snapshot.val()
      const alimentos = valor.map((item: TopLevel) => item.Alimento).join('\n');
      txtarea.innerHTML = `Datos encontrados: ${alimentos}`
    } else {
      txtarea.innerHTML = `No se encontraron datos`
    }
  }).catch((error) => {
    console.error(error);
  });
  
  const div = document.getElementById('showdiv')
  div?.appendChild(txtarea)

  
}

export function BuscarPorCategoriaFirebase(input:string){
  get(dataRef).then((snapshot) => {
    
    if (snapshot.exists()) {
      const valor =snapshot.val()
      const dataPorCategoria = valor.filter((item: TopLevel) => item.Categoría == input)
      const alimentosPorCategoria = dataPorCategoria.map((item: TopLevel) => item.Alimento).join('\n')
      txtarea.innerHTML = `Datos encontrados: ${alimentosPorCategoria}`
    } else {
      txtarea.innerHTML = `No se encontraron datos`
    }
  }).catch((error) => {
    console.error(error);
  });
  
  const div = document.getElementById('showdiv')
  div?.appendChild(txtarea)
}

export function BuscarPorNombreFirebase(input:string){
  get(dataRef).then((snapshot) => {
    
    if (snapshot.exists()) {
      const valor =snapshot.val()
      const dataPorNombre = valor.filter((item: TopLevel)=> item.Alimento.includes(input))
      const nombreAlimento = dataPorNombre.map((item :TopLevel) => item.Alimento).join('\n')
      txtarea.innerHTML = `Datos encontrados: ${nombreAlimento}`
    } else {
      txtarea.innerHTML = `No se encontraron datos`
    }
  }).catch((error) => {
    console.error(error);
  });
  
  const div = document.getElementById('showdiv')
  div?.appendChild(txtarea)
}
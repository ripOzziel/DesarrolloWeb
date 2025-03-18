import './style.css'
//import './fetch/consumir.ts'
//import './fetch/categoria.ts'
//import './fetch/promesas.ts'
import './firebaseConsumer.ts'
import { categorias } from './categoriasArreglo.ts'
import { MostrarAlimentosFirebase, BuscarPorCategoriaFirebase, BuscarPorNombreFirebase } from './firebaseConsumer.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    
    <h1>Firebase consumer</h1>
    
    <select id='selectBx'>
      <option value="mostrarAlimentos">Mostrar Alimentos</option>
      <option value="porCategoria">Por Categoria</option>
      <option value="porNombre">Por Nombre</option>

    </select>
    
    <div id="showdiv"></div>
  </div>
`

const selectBx = document.getElementById('selectBx') as HTMLSelectElement;
const showDiv = document.getElementById('showdiv') as HTMLDivElement;
//const mostrarAPIButton = document.getElementById('mostrarAPI') as HTMLButtonElement;
selectBx.addEventListener('change', () => {
  const selectedOption = selectBx.value; // Obtener el valor seleccionado

  // Mostrar la vista correspondiente
  switch (selectedOption) {
    case 'mostrarAlimentos':
      mostrarAlimentos();
      break;
    case 'porCategoria':
      porCategoria()
      break;
    case 'porNombre':
      porNombre()
      break;
    default:
      showDiv.innerHTML= '<p>SELECCIONA UNA OPCION</p>'
  }
})

async function mostrarAlimentos() {
  showDiv.innerHTML = `
    <h2>Mostrar alimentos</h2>
    <button id  ="mostrarAlimentos">Ver</button>
  `
  document.getElementById('mostrarAlimentos')?.addEventListener('click', MostrarAlimentosFirebase)
  
}

async function porCategoria() {
  showDiv.innerHTML = `
    <h2>Busqueda por categoria</h2>
    <select id="categoriaSelect">
      ${categorias.map(categoria => `<option value="${categoria}">${categoria}</option>`).join('')}
    </select>
  `;
  const categoriaSelect = document.getElementById('categoriaSelect') as HTMLSelectElement;
  const categoria = categoriaSelect.value;
  categoriaSelect.addEventListener('change', ()=>{
    BuscarPorCategoriaFirebase(categoria)
  })
}

async function porNombre(){
  showDiv.innerHTML = `
    <h2>Busqueda por nombre</h2>
    <label>Escribe el nombre</label>
    <input type="text" id="nombre" >
    <button id="buscarPorNombreBtn">Buscar</button>
  `

  document.getElementById('buscarPorNombreBtn')?.addEventListener('click', () => {
    const nombreInput = document.getElementById('nombre') as HTMLInputElement;
    const nombreABuscar = nombreInput.value;
    BuscarPorNombreFirebase(nombreABuscar);
  });
}
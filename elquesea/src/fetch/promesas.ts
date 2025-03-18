import { TopLevel } from "../interfaces/smae-interface"

/**
 * Realiza una búsqueda de alimentos por nombre en un archivo JSON. Utiliza el método fetch para obtener los datos.
 * 
 * 
 * @param {string} input - El nombre o parte del nombre del alimento a buscar.
 * @param {string} url  -El URL donde se encuentra el archivo JSON
 * @returns {Promise<TopLevel[]>} - Una promesa que resuelve con los datos filtrados.
 * 
 * @example
 * busquedaPorNombre("Acelga").then(data => console.log(data));
 * 
 * Salida esperada
 * [
 *  {
 *   "Alimento": "Acelga",
 *  "AzucarPorEquivalenteG": "0.00",
 * ...
 *  }
 * ]
 */
export function BuscarPorNombre(input: string, url: string): Promise<TopLevel[]> {
    return fetch(url)
        .then(prom => prom.json())
        .then((body: TopLevel[]) => {
            const data = body.filter(x => x.Alimento.includes(input));
            return data;
        });
}

BuscarPorNombre("Acelga", '../../data/smae.json').then(data => console.log(data));

/**
 * Realiza una búsqueda de alimentos por categoría en un archivo JSON.
 * 
 * @param {string} input - El nombre de la categoría del alimento a buscar.
 * @param {string} url  -El URL donde se encuentra el archivo JSON

 * @returns {void} - La función no retorna un valor, pero imprime los resultados en la consola.
 * 
 * @example
 * ob("Frutas");
 * 
 * Salida esperada
 *  [
 *    {
 *      "Alimento": "Manzana",
 *      "Categoría": "Frutas",
 *      ...
 *    },
 *    ...
 *  ]
 */
export function BuscarPorCategoria(input: string, url: string) {
    fetch(url)
    .then(x => x.json())
    .then((body: TopLevel[]) => {
        const data = body.filter(x => x.Categoría == input);
        console.log(data);
    });
}
BuscarPorCategoria("Frutas", '../../data/smae.json');

/**
 * Muestra todos los alimentos en un archivo JSON.
 * 
 * @param {string} url  -El URL donde se encuentra el archivo JSON
 * @returns {void} - La función no retorna un valor, pero imprime los alimentos en la consola.
 * 
 * @example
 * mostrarAlimentos();
 * 
 *  Salida esperada en la consola:
 *  [
 *    { "alimento": "Acelga" },
 *    { "alimento": "Manzana" },
 *    ...
 *  ]
 */

export function MostrarAlimentos(url: string): void {
    fetch(url)
        .then((res) => res.json())
        .then((body: TopLevel[]) => {
            console.log('Tipo de dato en Mostar Alimentos:')
            console.log(typeof body)
            const alimentos = body.map((item) => {
                const alimento = item.Alimento;
                return { alimento };
            });
            console.log(alimentos);
            return alimentos;

        });
}

MostrarAlimentos('../../data/smae.json');


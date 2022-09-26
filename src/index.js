/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";

const appNode = document.querySelector('#app')

const formatPrice = (price) => {

const newPrice = new window.Intl.NumberFormat("en-EN",{
    style: 'currency',
    currency: 'USD',
}).format(price)

    return newPrice;
}

//web api
//conectarnos al servidor 
window
.fetch(`${baseUrl}/api/avo`)
//procesar la respuesta y convertirla en JSON 
.then((respuesta) => respuesta.json())
// JSON -> data -> renderizar info browser 
.then((responseJson) => {
    const todosLosItems = [];
    responseJson.data.forEach((item)  => {
    //crear imagen
    const imagen = document.createElement('img');
    // url de la imagen
    imagen.src = `${baseUrl}${item.image}`;

    // crear titulo 
    const title = document.createElement('h2');
    title.textContent = item.name;
    title.className = 'text-lg';

    // crear precio 
    const price = document.createElement('div');
    price.textContent = item.price;
    price.className = 'text-gray-600';
    price.textContent = formatPrice(item.price);

    const container = document.createElement('div')
    container.append(imagen, title, price);

    todosLosItems.push(container)
    });

    appNode.append(...todosLosItems);
    
    const App = document.getElementById('app');
    App.className = 'mt-10 grid grid-cols-2 gap-2';
});


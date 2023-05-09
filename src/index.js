/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseurl = "https://platzi-avo.vercel.app";
//web API con promesas
//conectarnos al servidor
//procesar la respuesta y convertirla en JSON
//JSON -> Data -> renderizar
/////////////////////////////////////////////////////////////////////////
const appNode =  document.querySelector('#app')
appNode.classList = 'grid grid-cols-3'

//intl
//1 - format date
// format prices
const formatPrice = price => {
    const newPrice = new window.Intl.NumberFormat('eS',{
        style: 'currency',
        currency: 'EUR'
    }).format(price);

    return newPrice;
}

//conectarnos al servidor
window.fetch(`${baseurl}/api/avo`)
//procesar la respuesta y convertirla en JSON
.then(respuesta => respuesta.json())
//JSON -> Data -> renderizar
.then(responseJson => {
    const todosLosItems = [];
    responseJson.data.map(item => {
        //crear imagen
        const image = document.createElement('img');
        image.className = 'img';
        image.src = `${baseurl}${item.image}`
        //crear titulo
        const title = document.createElement('h2');
        title.className = 'text-xl text-black-600';
        title.textContent = item.name;
        //crear precio
        const price = document.createElement('div');
        price.className = 'price';
        price.textContent = formatPrice(item.price);
        const container = document.createElement('div');
        container.className = 'container';
        container.append(image,title,price);
        todosLosItems.push(container);
    })
    
    appNode.append(...todosLosItems);
})
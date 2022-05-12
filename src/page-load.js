export const pageLoad = () => {
    const content = document.querySelector('#content');
    //Restaurant title
    const title = document.createElement('h1');
    title.textContent = 'Restaurant';
    content.append(title);
    //Image
    const image = document.createElement('img');
    image.src = "../images/restaurant.jpg";
    content.append(image);
    //Description
    const description = document.createElement('p');
    description.textContent = 'Something about a restaurant!, come to our restaurant, the best restaurant in town, etc.'
    content.append(description);
}
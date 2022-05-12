export const menuLoad = () => {
    const content = document.querySelector('#content');
    //title
    const title = document.createElement('h1');
    title.textContent = 'Our Menu';
    content.append(title);
    //List
    const menuList = document.createElement('ul');
    menuList.innerHTML = '<li>Avocado</li><li>Poached Egg</li><li>Salmon</li><li>Quinoa</li><li>Salada</li><li>Lasagna</li>';
    content.append(menuList);
   
}
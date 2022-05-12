export const contactLoad = () => {
    const content = document.querySelector('#content');
    //title
    const title = document.createElement('h1');
    title.textContent = 'Contact';
    content.append(title);
    //List
    const contactList = document.createElement('ul');
    contactList.innerHTML = '<li>restaurant@gmail.com</li><li>facebook.com/restaurant</li><li>12773123</li><li>95816912</li>';
    content.append(contactList);
   
}
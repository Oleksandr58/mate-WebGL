function close__aside() {    
    document.querySelector('aside').style.width = '0px';
    document.querySelector('main').style.width = 'calc(98% - 2px)';
    document.querySelector('#open__aside').style.display = 'block';
    document.querySelector('#dino__speak').style.display = 'none';
}

function open__aside() {    
    document.querySelector('#open__aside').style.display = 'none';
    document.querySelector('#dino__speak').style.display = 'block';
    document.querySelector('main').style.width = 'calc(73% - 2px)';
    document.querySelector('aside').style.width = '25%';
}
let url = 'https://swapi.co/api/people/2/';
let xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.send();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 3) {
        alert(`Загрузка`);
    }
};
xhr.onload = function() {
    if (xhr.status != 200) {
        alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
        return;
    }
    alert(`Готово, получено ${xhr.response.length} байт`);
    var obj = JSON.parse(xhr.response);
    for (let key in obj) {
        alert(key + ' = ' + obj[key]);
    }
};

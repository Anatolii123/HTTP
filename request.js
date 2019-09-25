let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://swapi.co/api/people/1/');
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
    // var map = new Map(JSON.parse(xhr.response));
    // map.get("name");
    alert(xhr.response.slice(1,7));
};
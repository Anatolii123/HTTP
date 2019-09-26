var tableObj = document.createElement('table');
var obj2 = [];
loadList("https://swapi.co/api/people/?page=1");

/**
 * Функция формирует и отправляет запрос на сервер по указанному адресу (url), преобразует ответ и добавляет его в массив obj2.
 * После заполнения массива выполняется функция makeDropdownList, которой на вход поступает массив obj2.
 * @param url
 */
function loadList(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onload = function () {
        if (xhr.readyState != 4) {
            return;
        }
        if (xhr.status != 200) {
            alert("Что-то пошло не так..." + "\n" + xhr.response.toString());
            return;
        }

        var response = JSON.parse(xhr.response);
        var results = response.results;
        for (var idx = 0; idx < results.length; idx++) {
            obj2.push(results[idx]);
        }

        if(response.next){
            loadList(response.next);
        } else {
            makeDropdownList(obj2);
        }
    }
}

/**
 * Функция добавляет необходимое количество элементов в объект select (в зависимости от длины массива list),
 * а также делает этот элемент видимым, а элемент text - невидимым
 * @param list
 */
function makeDropdownList(list) {
    var select = document.getElementById("mySelect");
    var text = document.getElementById("text");
    select.style.visibility = "visible";
    text.style.visibility = "hidden";
    for (let i = 0; i < list.length; i++) {
        var option = document.createElement("option");
        option.text = (i + 1).toString();
        select.options.add(option);
    }
}

/**
 * Функция извлекает из массива obj2 объект по индексу, указываемому в элементе sel, и заполняет таблицу tableObj
 * свойствами этого объекта. Значение в левом столбце таблицы зависит от ключа свойства объекта. Кроме того, функция
 * задает положение таблицы и добавляет её на страницу.
 */
function fun1() {
    options=document.getElementById('mySelect').options;
    sel = document.getElementById("mySelect").selectedIndex;
    tableHTML = "";
    for (let key in obj2[options[sel].text]) {
        switch (key) {
            case "name":
                row = '<tr><td>имя</td><td>' + obj2[options[sel].text][key] + '</td></tr>';
                break;
            case "height":
                row = '<tr><td>рост, см</td><td>' + obj2[options[sel].text][key] + '</td></tr>';
                break;
            case "mass":
                row = '<tr><td>вес, кг</td><td>' + obj2[options[sel].text][key] + '</td></tr>';
                break;
            case "hair_color":
                row = '<tr><td>цвет волос</td><td>' + obj2[options[sel].text][key] + '</td></tr>';
                break;
            case "skin_color":
                row = '<tr><td>цвет кожи</td><td>' + obj2[options[sel].text][key] + '</td></tr>';
                break;
            case "eye_color":
                row = '<tr><td>цвет глаз</td><td>' + obj2[options[sel].text][key] + '</td></tr>';
                break;
            case "birth_year":
                row = '<tr><td>год рождения</td><td>' + obj2[options[sel].text][key] + '</td></tr>';
                break;
            case "gender":
                row = '<tr><td>пол</td><td>' + obj2[options[sel].text][key] + '</td></tr>';
                break;
            case "films":
                row = '<tr><td>фильмы</td><td>' + obj2[options[sel].text][key] + '</td></tr>';
                break;
            case "created":
                row = '<tr><td>дата создания записи</td><td>' + obj2[options[sel].text][key] + '</td></tr>';
                break;
            case "edited":
                row = '<tr><td>дата последней правки</td><td>' + obj2[options[sel].text][key] + '</td></tr>';
                break;
            default:
                row = '<tr><td>' + key + '</td><td>' + obj2[options[sel].text][key] + '</td></tr>';
                break;
        }
        tableHTML += row;
    }
    tableObj.innerHTML = tableHTML;
    tableObj.style.top = '10%';
    tableObj.style.left = '5%';
    document.body.appendChild(tableObj);
}





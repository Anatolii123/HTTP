var tableObj = document.createElement('table');
var obj2 = [];
loadList("https://swapi.co/api/people/?page=1");

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

function fun1() {
    options=document.getElementById('mySelect').options;
    sel = document.getElementById("mySelect").selectedIndex;
    tableHTML = "";
    for (let key in obj2[options[sel].text]) {
        row = '<tr><td>' + key + '</td><td>' + obj2[options[sel].text][key] + '</td></tr>';
        tableHTML += row;
    }
    tableObj.innerHTML = tableHTML;
    tableObj.style.top = '10%';
    tableObj.style.left = '5%';
    document.body.appendChild(tableObj);
}





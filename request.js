tableObj = document.createElement('table');
for (let i = 87; i > 1; i--) {
    d = document.getElementById("mySelect");
    option = document.createElement("option");
    option.text = i.toString();
    // url1 = 'https://swapi.co/api/people/' + i + '/';
    // xhr1 = new XMLHttpRequest();
    // xhr1.open('GET', url1);
    // xhr1.send();
    // obj1 = JSON.parse(xhr1.response);
    // option.value = i.toString();
    d.add(option, d[1]);
}

function fun1() {
    options=document.getElementById('mySelect').options;
    sel = document.getElementById("mySelect").selectedIndex;
    url = 'https://swapi.co/api/people/' + options[sel].text + '/';
    div = document.getElementById("items");
    tableObj.style.top = '10%';
    tableObj.style.left = '5%';

    xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onload = function() {
        if (xhr.status != 200) {
            alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
            return;
        }
        obj = JSON.parse(xhr.response);
        tableHTML = "";
        for (let key in obj) {
            row = '<tr><td>' + key + '</td><td>' + obj[key] + '</td></tr>';
            tableHTML += row;
        }
        tableObj.innerHTML = tableHTML;
        document.body.appendChild(tableObj);
    };
}





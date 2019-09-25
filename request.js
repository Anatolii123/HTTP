tableObj = document.createElement('table');
url = 'https://swapi.co/api/people/?page=1';
tableObj.id = "myTable";
for (let i = 9; i > 1; i--) {
    d = document.getElementById("mySelect");
    option = document.createElement("option");
    option.text = i.toString();
    d.add(option, d[1]);
}

function fun1() {
    options=document.getElementById('mySelect').options;
    sel = document.getElementById("mySelect").selectedIndex;
    xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onload = function() {
        obj = JSON.parse(xhr.response);
        obj2 = obj["results"];
        tableHTML = "";
        for (let key in obj2[options[sel].text]) {
            row = '<tr><td>' + key + '</td><td>' + obj2[options[sel].text][key] + '</td></tr>';
            tableHTML += row;
        }
        tableObj.innerHTML = tableHTML;
        tableObj.style.top = '10%';
        tableObj.style.left = '5%';
        document.body.appendChild(tableObj);
    };
}





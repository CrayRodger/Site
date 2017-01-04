/**
 * Created by Vladimir on 04.01.2017.
 */

// Пишем функцию, определяющую координаты
        function defPosition(event) {
            var x = y = 0;
            if (document.attachEvent != null) { // Internet Explorer & Opera
                x = window.event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
                y = window.event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
            } else if (!document.attachEvent && document.addEventListener) { // Gecko
                x = event.clientX + window.scrollX;
                y = event.clientY + window.scrollY;
            } else {
                // Do nothing
            }
            return {x:x, y:y};
        }
// Простая проверка
// С помощью document.write выведем координаты прямо в окно браузера
// Они будут обновлять при движении мыши
document.onmousemove = function(event) {
    var event = event || window.event;
//document.getElementById('help').innerHTML = "x = " + defPosition(event).x + ", y = " + defPosition(event).y;

//Здесь координаты присваиватся положению слоя относительно окна и к координате х плюсуется 15 пикселов, чтоб курсор не был на подсказке.
    document.getElementById('help').style.left = defPosition(event).x + 15 + "px";
    document.getElementById('help').style.top = defPosition(event).y + "px";
}

//Функция, которая делает видимым наш слой и вкладывает в него необходимый текст.
function helpBox(title, text) {
//Вкладываем текст
    document.getElementById('helpTitle1').innerHTML = title;
    document.getElementById('helpText1').innerHTML = text;

//Делаем видимым\невидимым
    if(document.getElementById('help1').style.display == 'none'){
        document.getElementById('help1').style.display = 'block';
    }else{
        document.getElementById('help1').style.display = 'none';
    }
}



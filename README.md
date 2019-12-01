ЗАПУСТИТЕ ЛОКАЛЬНЫЙ СЕРВЕР
//объект ajax
let request = new XmlHttpRequest();
request.open(method, url, async, login, password)
--------------------------------------------------
//method - get: получения данных, post: отправки данных
//url - путь к файлу 
//async - (true default) в случае false страница зависнет до ответа сервера
--------------------------------------------------
request.open(method, url, async, login, password)
--------------------------------------------------
//setRequestHeader - настройка ajax запроса
//указываю какой контент нужно запросить
//указываю этот контент в кодировке utf-8 формата json
request.setRequestHeader('Content-type', 'application/json, charset=utf-8')
    //метод send открывает соединение и отправляет запрос на сервер
    //принимает инфу (body)
    request.send();

    //свойства объекта xmlHttpReuest
    //status - http code answer server - state 404/400
    //statusText - text information 
    //responseText - конкретная информация / response ответ с сервера
    //readyState - этапы работы запроса сервера
------------------------------------------------------
    //события объекта xmlHttpRequest
    //load - отвечает ok - не гибкое событие
    //readystatechange - событие позволяет реагировать на все режимы запроса, контролить то как идет запрос
    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status == 200) {
            let date = JSON.parse(request.response);

            inputEuro.value = inputRub.value / date.usd;
        }
        //если есть повереждения в запросе, какаята ошибка в соединении с сервером
        else {
            inputEuro.value = 'Sorry unsucces with server';
        }
    })
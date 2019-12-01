let inputRub = document.getElementById('rub'),
    inputEuro = document.getElementById('er');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json, charset=utf-8')
    request.send();
    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status == 200) {
            let date = JSON.parse(request.response);

            inputEuro.value = inputRub.value / date.usd;
        }
        else {
            inputEuro.value = 'Sorry unsucces with server';
        }
    })
})
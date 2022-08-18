const buttons = document.getElementsByClassName('btn');
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        const result = document.getElementById('result');
        result.value += event.target.innerText
    })
}

document.getElementById('clear').addEventListener('click', function () {
    const result = document.getElementById('result');
    result.value = '';
})

document.getElementById('equal').addEventListener('click', function () {
    const result = document.getElementById('result');
    const calculate = eval(result.value);
    result.value = calculate;
    
})
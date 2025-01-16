document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-random').addEventListener('submit', function(event) {
        event.preventDefault();
        let numberMax = document.getElementById('number-max').value;
        numberMax = parseInt(numberMax);

        let numberRandom = Math.random() * numberMax; 
        numberRandom = Math.floor(numberRandom + 1);

        document.getElementById('result-number').innerText = numberRandom;
        document.querySelector('.result').style.display = 'block';
    })
})
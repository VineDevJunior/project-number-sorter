const buttonSorter = document.querySelector('.button-sorter');

function drawNumber() {
    const numberMin = document.querySelector('.input-min').value;
    const numberMax = document.querySelector('.input-max').value;

    const min = parseInt(numberMin, 10);
    const max = parseInt(numberMax, 10);

    if (isNaN(min) || isNaN(max) || min > max){
        alert("Por favor, insira valores válidos e se o mínimo for igual ou menor que ao valor o máximo.")
    }

    else{
        const sorterNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        alert (`O número sorteado foi: ${sorterNumber}`);
    }
}

buttonSorter.addEventListener('click', drawNumber);
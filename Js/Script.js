const contentHtml = document.querySelector('#content');

function checkAnniversary()
{
    let aniversaryDate = new Date('2022-05-23T12:00:00');
    let currentDate = new Date();

    let totalMonths = (currentDate.getFullYear() - aniversaryDate.getFullYear()) * 12;
    totalMonths += currentDate.getMonth() - aniversaryDate.getMonth();

    if (currentDate.getDate() < aniversaryDate.getDate()) {
        totalMonths--;
    }

    years = Math.floor(totalMonths/12);
    months = totalMonths % 12;

    const tempo = `${years} Anos e ${months} Meses`;
    return tempo;
}

function showContent ()
{
    let createHtml =
    `
    <div id="contador">
    <p id="text">Tempo de namoro:</p>
    <p id="tempo">${checkAnniversary()}</p>
    </div>
    
    <div id="calendario">
    <p id="data">${new Date().toLocaleDateString()}</p>
    </div>
    `
    contentHtml.innerHTML = createHtml;
}

showContent();
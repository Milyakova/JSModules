// common.js или util.js - сюда складываются нужные или ненужные функции
// дефолтный испорт - импортируется одна ключевая вещь из модуля
const message = document.querySelector('.message');

//дефолтный экспорт
export default function renderMessage(text){
    message.textContent = text;
    message.style.color ='red'
}

//именованный экспорт
export function renderDates(result) {
    message.innerHTML = `
    <span>Годы: ${result.years}</span>
    <span>Месяцы: ${result.months}</span>
    <span>Дни: ${result.days}</span>
    `
}
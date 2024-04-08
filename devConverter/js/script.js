const form = document.getElementById('form');
form.addEventListener('submit', handleSubmmit);

let inputValue = document.getElementById('value-real');
let selectCurrency = document.getElementById('currency');
let result = document.getElementById('result');
let valueConverter = 0;

function handleSubmmit(e) {
    e.preventDefault();

    if (!inputValue.value || inputValue.value < 0) {
        alert('Informe um valor correto');
        return;
    }
    else if (!selectCurrency.value) {
        alert('Selecione uma moeda');
        return;
    }

    converter();
};

function converter() {
    if (selectCurrency.value === 'eur') {
        valueConverter = parseFloat(inputValue.value) * 6.22;
        result.innerHTML = valueFormatter('pt-BR', 'EUR');
    } else if (selectCurrency.value === 'dol') {
        valueConverter = parseFloat(inputValue.value) * 5.37;
        result.innerHTML = valueFormatter('en-US', 'USD');
    }

}

function valueFormatter(locale, currecy) {
    const value = valueConverter.toLocaleString(`${locale}`, { style: 'currency', currency: `${currecy}` });
    return `<span>🤑</span> ${value} <span>🤑</span>`;
}
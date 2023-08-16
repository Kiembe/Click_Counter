const upBtn = document.getElementById('up_btn');
const downBtn = document.getElementById('down_btn');
const numberShow = document.getElementById('count');
const reset = document.querySelector('#reset');
const rate = document.querySelector('#rate_count');
const saveRate = document.querySelector('#save_rate');
const setValue = document.querySelector('#save_value');
const valueSet = document.querySelector('#value_set');
let rateVa = 1;

saveRate.onclick = () => {
    rateVa = parseInt(rate.value);
    rateMenu.classList.remove('show');
}

// setValue.onclick = () => {
//     const newValue = parseInt(valueSet.value);
//     numberShow.innerText = newValue;
//     localStorage.setItem('count',newValue);
//     menuSet.classList.remove('show')
// }

var StorageCount = localStorage.getItem('count');
if(StorageCount){
    numberShow.innerText = StorageCount;
}
let count = parseInt(numberShow.textContent);

upBtn.onclick = () => {
    count += rateVa;
    numberShow.innerText = count;
    localStorage.setItem('count',count);
}

downBtn.onclick = () => {
    count-= rateVa;
    numberShow.innerText = count;
    localStorage.setItem('count',count);
}

function closeMenu() {
    menu.classList.toggle('show');
}

reset.onclick = () => {
    count = 0
    numberShow.innerText = count;
    localStorage.setItem('count',count)
    setTimeout(closeMenu,500)
}
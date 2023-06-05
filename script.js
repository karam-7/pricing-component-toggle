const select = document.getElementById('select');
const basic = document.getElementById('basic');
const pro = document.getElementById('pro');
const master = document.getElementById('master');


select.checked = true;

select.addEventListener ('change', () => {
    if (select.checked  === false) {
        basic.innerHTML = '&dollar;199.99';
        pro.innerHTML = '&dollar;249.99';
        master.innerHTML = '&dollar;399.99';
    }
    if (select.checked === true) {
        basic.innerHTML = '&dollar;19.99';
        pro.innerHTML = '&dollar;24.99';
        master.innerHTML = '&dollar;39.99';
     }
})

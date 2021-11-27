function tabuada(){
    let num = window.document.getElementById('txtn');
    let tab = document.querySelector('#seltab');
    if(num.value.length == 0){
        window.alert('Porfavor digite um numero')
    }
    else{
        let n = Number(num.value)
        //alert(n)
        let c = 1;
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab ${c}`
            tab.appendChild(item)
            c++
            tab.style.width ='100px'
        }
        
     }
}
function limpa(){
    let tab = document.querySelector('#seltab');
    tab.innerHTML = ''
}
    
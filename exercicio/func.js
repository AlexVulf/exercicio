function dividir (){
    let v1 = document.getElementById("valor1").value;
    let v2 = document.getElementById("valor2").value;
    let op = v1 / v2;
    if(op => 0.7){
        alert("Compensa Abastecer Álcool");
    }else{
        alert("Compensa Abastecer Gasolina");
    }
}
function calcular (){
    let v1 = document.getElementById("valor").value;
    let moeda = document.getElementById("moeda").value;
    let imposto = document.getElementById("imp").value;
    let iof= 1.0638;
    let dolar = 5.23;
    let euro = 5.33
    if(moeda == "real" && imposto == "dinheiro"){
        alert("R$ " + v1);
    }else if(moeda == "dolar" && imposto == "dinheiro"){
        alert("R$ " + parseFloat(v1) * parseFloat(dolar));
    }else if(moeda == "euro" && imposto == "dinheiro"){
        alert("R$ " + parseFloat(v1) * parseFloat(euro));
    }else if(moeda == "real" && imposto == "cartao"){
        alert("R$ " + parseFloat(v1) * parseFloat(iof));
    }else if(moeda == "dolar" && imposto == "cartao"){
        alert("R$ " + (parseFloat(v1) * parseFloat(dolar)) * parseFloat(iof));
    }
    else{
        alert("R$ " + (parseFloat(v1) * parseFloat(euro)) * parseFloat(iof));
    }
}
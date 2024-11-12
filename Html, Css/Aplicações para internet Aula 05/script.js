function calculate() {
    //obter os valores das células
    var sub1 = parseFloat(document.getElementById('sub1').value) || 0
    var sub2 = parseFloat(document.getElementById('sub2').value) || 0

    var sum1 = parseFloat(document.getElementById('sum1').value) || 0
    var sum2 = parseFloat(document.getElementById('sum2').value) || 0

    var plus1 = parseFloat(document.getElementById('plus1').value) || 0
    var plus2 = parseFloat(document.getElementById('plus2').value) || 0
    
    var div1 = parseFloat(document.getElementById('div1').value) || 0
    var div2 = parseFloat(document.getElementById('div2').value) || 0

    //realizando as operações
    var result_sum = sum1 + sum2
    var result_sub = sub1 - sub2
    var result_plus = plus1 * plus2
    var result_div = div1 / div2

    // atualizando o valor na célula da resultado
    document.getElementById('result_sub').value = result_sub.toFixed(2)
    document.getElementById('result_sum').value = result_sum.toFixed(2)
    document.getElementById('result_plus').value = result_plus.toFixed(2)
    document.getElementById('result_div').value = result_div.toFixed(2)
}
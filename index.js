function dataMaior(data1, data2) {
    return data1 > data2 ? data1 : data2;
}

function calcularIntervalo(dataAntiga, dataNova) {
    if (dataAntiga > dataNova) {
        let temp = dataAntiga;
        dataAntiga = dataNova;
        dataNova = temp;
    }
    
    const milgundosPorDia = 1000 * 60 * 60 * 24;
    const diferencaMs = dataNova - dataAntiga;
    const diferencaDias = Math.floor(diferencaMs / milgundosPorDia);
    
    return diferencaDias;
}
function dataAtualFormatada() {
    const dataAtual = new Date();
    const hora = String(dataAtual.getHours()).padStart(2, '0');
    const minuto = String(dataAtual.getMinutes()).padStart(2, '0');
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();
    
    return `${hora}:${minuto} - ${dia}/${mes}/${ano}`;
}


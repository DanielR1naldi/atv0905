A função dataMaior(data1, data2) recebe dois parâmetros, data1 e data2, que são objetos Date ou valores de data. Retorna a data maior entre os dois usando o operador ternário ? :.

calcularIntervalo(dataAntiga, dataNova) recebe duas datas como parâmetros, dataAntiga e dataNova. Verifica se dataAntiga é maior que dataNova e, se for, troca os valores para garantir que dataAntiga seja a mais antiga. Calcula a diferença em milissegundos entre as duas datas e converte essa diferença em dias, retornando o número de dias entre elas.

dataAtualFormatada() obtém a data e hora atuais usando Date(), extrai a hora, o minuto, o dia, o mês e o ano da data atual. Usa padStart() para garantir que cada parte da data e hora tenha pelo menos dois dígitos e retorna uma string formatada contendo a hora (HH:mm), seguida pela data (DD/MM/AAAA).

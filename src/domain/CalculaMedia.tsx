export type NotaComPeso = { nota: number; peso: number };

export const CalculaMedia = (notas: NotaComPeso[], pesoFaltante: number, meta: number) => {
    console.log("Notas: " + notas[0].nota + " / " + notas[1].nota)
    console.log("Pesos: " + notas[0].peso + " / " + notas[1].peso)
    console.log("Peso da última avaliação: " + pesoFaltante)
    console.log("Média meta a ser alcançada: " + meta)

    let soma_dos_pesos_com_nota = 0
    let soma_das_notas = 0
    
    notas.forEach((n, i) => {
        soma_dos_pesos_com_nota += notas[i].peso;
        soma_das_notas += notas[i].nota * notas[i].peso;
    })
    let soma_dos_pesos = pesoFaltante + soma_dos_pesos_com_nota;
    const soma_das_notas_para_meta = meta * soma_dos_pesos
    const nota_necessaria = (soma_das_notas_para_meta - soma_das_notas) / pesoFaltante;

    //meta = soma das notas / soma dos pesos
    //nota necessaria = ((meta * soma dos pesos) - soma das notas) / peso faltante

    console.log("soma_dos_pesos: " + soma_dos_pesos)
    console.log("soma_das_notas: " + soma_das_notas)
    console.log("soma_das_notas_para_meta: " + soma_das_notas_para_meta)
    console.log("nota_necessaria: " + nota_necessaria)

    if(soma_das_notas >= soma_das_notas_para_meta) return "Já passou!";
    if(nota_necessaria > 10) return "Infelizmente não é possível atingir essa média..."

    return `Você precisa tirar ${nota_necessaria} para alcançar sua meta!`
}
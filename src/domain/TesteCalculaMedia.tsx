import { CalculaMedia } from "./CalculaMedia";

// Caso 1: duas notas feitas, uma avaliação faltando com peso 2
const notas1 = [
    { nota: 0, peso: 2 },
    { nota: 0, peso: 3 },
];
console.log('Caso 1:', CalculaMedia(notas1, 2, 6));
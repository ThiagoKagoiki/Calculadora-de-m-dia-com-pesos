import { CalculaMedia, NotaComPeso } from '@/domain/CalculaMedia';
import { useState } from 'react';

type Linha = { id: number; nota: string; peso: string };

export function useNotas() {
    // 1. ESTADO: o que o usuário digitou
    const [linhas, setLinhas] = useState<Linha[]>([{ id: 1, nota: '', peso: '' }]);
    const [meta, setMeta] = useState("")
    const [media, setMedia] = useState<number | null>(null);
    const [resp, setResp] = useState("")
    // 2. AÇÕES: o que a tela pode pedir pra fazer
    function adicionarNota() {
        setLinhas((atual) => [...atual, { id: Date.now(), nota: '', peso: '' }]);
    }

    function removerNota(id: number) {
        setLinhas((atual) => (atual.length > 1 ? atual.filter((l) => l.id !== id) : atual));
    }

    function atualizar(id: number, campo: 'nota' | 'peso', valor: string) {
        setLinhas((atual) => atual.map((l) => (l.id === id ? { ...l, [campo]: valor } : l)));
    }

    // 3. PONTE COM O DOMAIN: converte texto -> número e chama sua função
    function simular() {
        // a linha que está sem nota
        const linhaSemNota = linhas.find((l) => l.nota.trim() === '');
        const pesoSemNota = Number(linhaSemNota?.peso.replace(',', '.')) || 0;

        // só as linhas preenchidas, com nota
        const notas: NotaComPeso[] = linhas
            .filter((l) => l.nota.trim() !== '')
            .map((l) => ({
                nota: Number(l.nota.replace(',', '.')),
                peso: Number(l.peso.replace(',', '.')),
            }));


        const resposta =CalculaMedia(notas, pesoSemNota, Number(meta.replace(',', '.')));
        setMedia(null);
        setResp(resposta)
    }

    // 4. O que a tela recebe
    return { linhas, media, adicionarNota, removerNota, atualizar, meta, setMeta, simular, resp, setResp };
}
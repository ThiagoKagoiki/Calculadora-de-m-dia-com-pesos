// Tela: formulário para calcular a média (só visual).
import { Botao } from '@/components/Botao';
import { CampoTexto } from '@/components/CampoTexto';
import { Opcao, Select } from '@/components/Select';
import { cores } from '@/constants/tema';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';


// OPÇÕES DE EXEMPLO: depois virão das matérias cadastradas.
const MATERIAS: Opcao[] = [
    { label: 'Matemática', value: 'matematica' },
    { label: 'Português', value: 'portugues' },
    { label: 'Física', value: 'fisica' },
    { label: 'Química', value: 'quimica' },
];

const PERIODOS: Opcao[] = [
    { label: '1º Bimestre', value: 'b1' },
    { label: '2º Bimestre', value: 'b2' },
    { label: '3º Bimestre', value: 'b3' },
    { label: '4º Bimestre', value: 'b4' },
];

const TIPOS_AVALIACAO: Opcao[] = [
    { label: 'Prova', value: 'prova' },
    { label: 'Trabalho', value: 'trabalho' },
    { label: 'Seminário', value: 'seminario' },
    { label: 'Lista de exercícios', value: 'lista' },
    { label: 'Participação', value: 'participacao' },
];

export default function CalcularScreen() {
    const [materia, setMateria] = useState<string | null>(null);
    const [periodo, setPeriodo] = useState<string | null>(null);
    const [tipo, setTipo] = useState<string | null>(null);
    const [descricao, setDescricao] = useState('');
    const [nota, setNota] = useState('');
    const [peso, setPeso] = useState('');

    function handleAdicionarAvaliacao() {
        // TODO: sua lógica para adicionar a avaliação na lista
    }

    function handleCalcular() {
        // TODO: sua lógica de cálculo
    }

    function handleSalvar() {
        // TODO: sua lógica para salvar a média
    }

    return (
        <KeyboardAvoidingView
            style={styles.tela}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={90}
        >
            <ScrollView contentContainerStyle={styles.conteudo} keyboardShouldPersistTaps="handled">
                {/* Resultado */}
                <View style={styles.resultado}>
                    <Text style={styles.resultadoRotulo}>Média</Text>
                    <Text style={styles.resultadoValor}>—</Text>
                </View>

                {/* Seção 1: de onde é a média */}
                <Text style={styles.secao}>Matéria</Text>
                <View style={styles.cartao}>
                    <Select rotulo="Matéria" opcoes={MATERIAS} valor={materia} onChange={setMateria} placeholder="Escolha a matéria" />
                    <Select rotulo="Período" opcoes={PERIODOS} valor={periodo} onChange={setPeriodo} placeholder="Escolha o período" />
                </View>

                {/* Seção 2: avaliação */}
                <Text style={styles.secao}>Avaliação</Text>
                <View style={styles.cartao}>
                    <Select rotulo="Tipo" opcoes={TIPOS_AVALIACAO} valor={tipo} onChange={setTipo} placeholder="Prova, trabalho..." />
                    <CampoTexto
                        rotulo="Descrição"
                        placeholder="Ex.: Prova de frações"
                        value={descricao}
                        onChangeText={setDescricao}
                    />
                    <View style={styles.linhaDupla}>
                        <View style={styles.metade}>
                            <CampoTexto
                                rotulo="Nota"
                                placeholder="0 a 10"
                                keyboardType="decimal-pad"
                                value={nota}
                                onChangeText={setNota}
                            />
                        </View>
                        <View style={styles.metade}>
                            <CampoTexto
                                rotulo="Peso"
                                placeholder="Ex.: 2"
                                keyboardType="decimal-pad"
                                value={peso}
                                onChangeText={setPeso}
                            />
                        </View>
                    </View>
                    <Botao titulo="+ Adicionar avaliação" variante="secundario" onPress={handleAdicionarAvaliacao} />
                </View>

                {/* Seção 3: avaliações adicionadas (vazia por enquanto) */}
                <Text style={styles.secao}>Avaliações adicionadas</Text>
                <View style={[styles.cartao, styles.cartaoVazio]}>
                    <Text style={styles.textoVazio}>Nenhuma avaliação adicionada ainda.</Text>
                </View>

                <View style={styles.acoes}>
                    <Botao titulo="Calcular média" onPress={handleCalcular} />
                    <Botao titulo="Salvar" variante="secundario" onPress={handleSalvar} />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    tela: { flex: 1, backgroundColor: cores.fundo },
    conteudo: { padding: 20, paddingBottom: 40 },

    resultado: {
        backgroundColor: cores.primaria, borderRadius: 18, paddingVertical: 22,
        alignItems: 'center', marginBottom: 8,
    },
    resultadoRotulo: { color: 'rgba(255,255,255,0.8)', fontSize: 14, fontWeight: '600' },
    resultadoValor: { color: cores.branco, fontSize: 48, fontWeight: '800' },

    secao: {
        fontSize: 13, fontWeight: '700', color: cores.textoSuave,
        textTransform: 'uppercase', marginTop: 20, marginBottom: 8,
    },
    cartao: {
        backgroundColor: cores.branco, borderRadius: 16, padding: 16, gap: 14,
        borderWidth: 1, borderColor: cores.borda,
    },
    cartaoVazio: { alignItems: 'center', paddingVertical: 24 },
    textoVazio: { color: cores.textoSuave, fontSize: 14 },

    linhaDupla: { flexDirection: 'row', gap: 12 },
    metade: { flex: 1 },

    acoes: { gap: 10, marginTop: 24 },
});

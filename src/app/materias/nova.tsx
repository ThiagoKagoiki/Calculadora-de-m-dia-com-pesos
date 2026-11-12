// Tela: cadastro de matéria (só visual).
import { Botao } from '@/components/Botao';
import { CampoTexto } from '@/components/CampoTexto';
import { Opcao, Select } from '@/components/Select';
import { cores } from '@/constants/tema';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';


const PERIODOS: Opcao[] = [
    { label: '1º Bimestre', value: 'b1' },
    { label: '2º Bimestre', value: 'b2' },
    { label: '3º Bimestre', value: 'b3' },
    { label: '4º Bimestre', value: 'b4' },
    { label: 'Ano todo', value: 'anual' },
];

const ESCALAS: Opcao[] = [
    { label: '0 a 10', value: '10' },
    { label: '0 a 100', value: '100' },
];

export default function NovaMateriaScreen() {
    const [nome, setNome] = useState('');
    const [professor, setProfessor] = useState('');
    const [periodo, setPeriodo] = useState<string | null>(null);
    const [escala, setEscala] = useState<string | null>('10');
    const [mediaMinima, setMediaMinima] = useState('');
    const [observacoes, setObservacoes] = useState('');

    function handleSalvar() {
        // TODO: sua lógica para salvar a matéria
    }

    function handleCancelar() {
        // TODO: voltar para a tela anterior
    }

    return (
        <KeyboardAvoidingView
            style={styles.tela}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={90}
        >
            <ScrollView contentContainerStyle={styles.conteudo} keyboardShouldPersistTaps="handled">
                <Text style={styles.secao}>Informações</Text>
                <View style={styles.cartao}>
                    <CampoTexto
                        rotulo="Nome da matéria *"
                        placeholder="Ex.: Matemática"
                        value={nome}
                        onChangeText={setNome}
                        autoCapitalize="words"
                    />
                    <CampoTexto
                        rotulo="Professor(a)"
                        placeholder="Opcional"
                        value={professor}
                        onChangeText={setProfessor}
                        autoCapitalize="words"
                    />
                    <Select rotulo="Período *" opcoes={PERIODOS} valor={periodo} onChange={setPeriodo} />
                </View>

                <Text style={styles.secao}>Regras de aprovação</Text>
                <View style={styles.cartao}>
                    <Select rotulo="Escala das notas" opcoes={ESCALAS} valor={escala} onChange={setEscala} />
                    <CampoTexto
                        rotulo="Média mínima para aprovação *"
                        placeholder="Ex.: 6"
                        keyboardType="decimal-pad"
                        value={mediaMinima}
                        onChangeText={setMediaMinima}
                        ajuda="A nota que a escola exige para passar direto."
                    />
                </View>

                <Text style={styles.secao}>Extras</Text>
                <View style={styles.cartao}>
                    <CampoTexto
                        rotulo="Observações"
                        placeholder="Ex.: prova final vale o dobro"
                        value={observacoes}
                        onChangeText={setObservacoes}
                        multiline
                        numberOfLines={3}
                        style={styles.areaTexto}
                    />
                </View>

                <Text style={styles.obrigatorio}>* Campos obrigatórios</Text>

                <View style={styles.acoes}>
                    <Botao titulo="Salvar matéria" onPress={handleSalvar} />
                    <Botao titulo="Cancelar" variante="secundario" onPress={handleCancelar} />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    tela: { flex: 1, backgroundColor: cores.fundo },
    conteudo: { padding: 20, paddingBottom: 40 },
    secao: {
        fontSize: 13, fontWeight: '700', color: cores.textoSuave,
        textTransform: 'uppercase', marginTop: 16, marginBottom: 8,
    },
    cartao: {
        backgroundColor: cores.branco, borderRadius: 16, padding: 16, gap: 14,
        borderWidth: 1, borderColor: cores.borda,
    },
    areaTexto: { minHeight: 90, textAlignVertical: 'top' },
    obrigatorio: { fontSize: 12, color: cores.textoSuave, marginTop: 14 },
    acoes: { gap: 10, marginTop: 20 },
});

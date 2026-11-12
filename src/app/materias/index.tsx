// Tela: lista de todas as médias em formato de tabela.
import { Botao } from '@/components/Botao';
import { cores } from '@/constants/tema';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';


type Situacao = 'Aprovado' | 'Recuperação' | 'Reprovado';

type LinhaTabela = {
    id: string;
    materia: string;
    periodo: string;
    media: string;
    situacao: Situacao;
};

// DADOS DE EXEMPLO: só pra ver a tabela preenchida.
// Troque pelos dados reais quando fizer a sua lógica.
const DADOS_EXEMPLO: LinhaTabela[] = [
    { id: '1', materia: 'Matemática', periodo: '1º Bim', media: '8,50', situacao: 'Aprovado' },
    { id: '2', materia: 'Português', periodo: '1º Bim', media: '7,20', situacao: 'Aprovado' },
    { id: '3', materia: 'Física', periodo: '1º Bim', media: '5,40', situacao: 'Recuperação' },
    { id: '4', materia: 'Química', periodo: '2º Bim', media: '9,10', situacao: 'Aprovado' },
    { id: '5', materia: 'História', periodo: '2º Bim', media: '3,80', situacao: 'Reprovado' },
    { id: '6', materia: 'Biologia', periodo: '2º Bim', media: '6,00', situacao: 'Aprovado' },
];

const CORES_SITUACAO: Record<Situacao, { fundo: string; texto: string }> = {
    Aprovado: { fundo: cores.sucessoClaro, texto: cores.sucesso },
    Recuperação: { fundo: cores.alertaClaro, texto: cores.alerta },
    Reprovado: { fundo: cores.perigoClaro, texto: cores.perigo },
};

export default function ListaMediasScreen() {
    const router = useRouter();
    const linhas = DADOS_EXEMPLO;

    return (
        <View style={styles.tela}>
            <ScrollView contentContainerStyle={styles.conteudo}>
                <Text style={styles.contador}>{linhas.length} matérias</Text>

                <View style={styles.tabela}>
                    {/* Cabeçalho */}
                    <View style={[styles.linha, styles.cabecalho]}>
                        <Text style={[styles.celula, styles.colMateria, styles.textoCabecalho]}>Matéria</Text>
                        <Text style={[styles.celula, styles.colPeriodo, styles.textoCabecalho]}>Período</Text>
                        <Text style={[styles.celula, styles.colMedia, styles.textoCabecalho]}>Média</Text>
                        <Text style={[styles.celula, styles.colSituacao, styles.textoCabecalho]}>Situação</Text>
                    </View>

                    {/* Linhas */}
                    {linhas.map((l, i) => {
                        const cor = CORES_SITUACAO[l.situacao];
                        return (
                            <View
                                key={l.id}
                                style={[styles.linha, i % 2 === 1 && styles.linhaZebrada, i === linhas.length - 1 && styles.ultimaLinha]}
                            >
                                <Text style={[styles.celula, styles.colMateria, styles.textoMateria]} numberOfLines={1}>
                                    {l.materia}
                                </Text>
                                <Text style={[styles.celula, styles.colPeriodo]}>{l.periodo}</Text>
                                <Text style={[styles.celula, styles.colMedia, styles.textoMedia]}>{l.media}</Text>
                                <View style={[styles.celula, styles.colSituacao]}>
                                    <View style={[styles.etiqueta, { backgroundColor: cor.fundo }]}>
                                        <Text style={[styles.textoEtiqueta, { color: cor.texto }]} numberOfLines={1}>
                                            {l.situacao}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        );
                    })}

                    {linhas.length === 0 ? (
                        <Text style={styles.vazio}>Nenhuma média cadastrada ainda.</Text>
                    ) : null}
                </View>
            </ScrollView>

            <View style={styles.rodape}>
                <Botao titulo="+ Nova matéria" onPress={() => router.push('/materias/nova')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tela: { flex: 1, backgroundColor: cores.fundo },
    conteudo: { padding: 20 },
    contador: { fontSize: 14, color: cores.textoSuave, marginBottom: 12 },

    tabela: {
        backgroundColor: cores.branco, borderRadius: 14,
        borderWidth: 1, borderColor: cores.borda, overflow: 'hidden',
    },
    linha: {
        flexDirection: 'row', alignItems: 'center',
        paddingVertical: 14, paddingHorizontal: 12,
        borderBottomWidth: 1, borderBottomColor: cores.borda,
    },
    ultimaLinha: { borderBottomWidth: 0 },
    linhaZebrada: { backgroundColor: '#fcfbff' },
    cabecalho: { backgroundColor: cores.primariaClara, paddingVertical: 12 },

    celula: { paddingHorizontal: 4, fontSize: 14, color: cores.texto },
    colMateria: { flex: 2.2 },
    colPeriodo: { flex: 1.3 },
    colMedia: { flex: 1.1, textAlign: 'right' },
    colSituacao: { flex: 2, alignItems: 'flex-end' },

    textoCabecalho: { fontSize: 12, fontWeight: '700', color: cores.primaria, textTransform: 'uppercase' },
    textoMateria: { fontWeight: '600' },
    textoMedia: { fontWeight: '700' },

    etiqueta: { borderRadius: 999, paddingHorizontal: 8, paddingVertical: 4 },
    textoEtiqueta: { fontSize: 11, fontWeight: '700' },

    vazio: { padding: 24, textAlign: 'center', color: cores.textoSuave },
    rodape: { padding: 20, paddingBottom: 32, backgroundColor: cores.fundo },
});

import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
    icone: string;
    titulo: string;
    descricao: string;
    onPress: () => void;
    destaque?: boolean; // botão principal, com fundo roxo
};

export function BotaoMenu({ icone, titulo, descricao, onPress, destaque = false }: Props) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.botao,
                destaque && styles.botaoDestaque,
                pressed && styles.pressionado,
            ]}
        >
            <View style={[styles.icone, destaque && styles.iconeDestaque]}>
                <Text style={styles.iconeTexto}>{icone}</Text>
            </View>
            <View style={styles.textos}>
                <Text style={[styles.titulo, destaque && styles.textoClaro]}>{titulo}</Text>
                <Text style={[styles.descricao, destaque && styles.textoClaroSuave]}>{descricao}</Text>
            </View>
            <Text style={[styles.seta, destaque && styles.textoClaro]}>›</Text>
        </Pressable>
    );
}

const ROXO = '#6b5bd2';

const styles = StyleSheet.create({
    botao: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
        padding: 18,
        borderRadius: 16,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ece9fb',
    },
    botaoDestaque: { backgroundColor: ROXO, borderColor: ROXO },
    pressionado: { opacity: 0.85, transform: [{ scale: 0.99 }] },

    icone: {
        width: 48, height: 48, borderRadius: 14,
        backgroundColor: '#f3f0ff', alignItems: 'center', justifyContent: 'center',
    },
    iconeDestaque: { backgroundColor: 'rgba(255,255,255,0.2)' },
    iconeTexto: { fontSize: 22 },

    textos: { flex: 1 },
    titulo: { fontSize: 17, fontWeight: '700', color: '#1a1a1a' },
    descricao: { fontSize: 13, color: '#777', marginTop: 2 },
    textoClaro: { color: '#fff' },
    textoClaroSuave: { color: 'rgba(255,255,255,0.8)' },

    seta: { fontSize: 28, color: '#bbb', fontWeight: '300' },
});

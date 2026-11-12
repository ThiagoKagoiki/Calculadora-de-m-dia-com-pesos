import { cores, raio } from '@/constants/tema';
import { Pressable, StyleSheet, Text } from 'react-native';

type Props = {
    titulo: string;
    onPress: () => void;
    variante?: 'primario' | 'secundario';
};

export function Botao({ titulo, onPress, variante = 'primario' }: Props) {
    const secundario = variante === 'secundario';
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.botao,
                secundario && styles.botaoSecundario,
                pressed && { opacity: 0.85 },
            ]}
        >
            <Text style={[styles.texto, secundario && styles.textoSecundario]}>{titulo}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    botao: {
        backgroundColor: cores.primaria, borderRadius: raio,
        paddingVertical: 15, alignItems: 'center',
    },
    botaoSecundario: {
        backgroundColor: cores.branco, borderWidth: 1.5, borderColor: cores.primaria,
    },
    texto: { color: cores.branco, fontSize: 16, fontWeight: '700' },
    textoSecundario: { color: cores.primaria },
});

import { cores, raio } from '@/constants/tema';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';

type Props = TextInputProps & {
    rotulo: string;
    ajuda?: string; // texto pequeno embaixo do campo
};

export function CampoTexto({ rotulo, ajuda, style, ...props }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.rotulo}>{rotulo}</Text>
            <TextInput style={[styles.input, style]} placeholderTextColor="#999" {...props} />
            {ajuda ? <Text style={styles.ajuda}>{ajuda}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { gap: 6 },
    rotulo: { fontSize: 14, fontWeight: '600', color: '#333' },
    input: {
        borderWidth: 1, borderColor: cores.borda, borderRadius: raio,
        paddingHorizontal: 14, paddingVertical: 13, fontSize: 16,
        color: cores.texto, backgroundColor: cores.branco,
    },
    ajuda: { fontSize: 12, color: cores.textoSuave },
});

// React Native não tem um <select> como o HTML.
// Este componente imita um: um campo que, ao tocar, abre uma lista de opções.
import { cores, raio } from '@/constants/tema';
import { useState } from 'react';
import { FlatList, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

export type Opcao = { label: string; value: string };

type Props = {
    rotulo: string;
    opcoes: Opcao[];
    valor: string | null;
    onChange: (valor: string) => void;
    placeholder?: string;
};

export function Select({ rotulo, opcoes, valor, onChange, placeholder = 'Selecione' }: Props) {
    const [aberto, setAberto] = useState(false);
    const selecionada = opcoes.find((o) => o.value === valor);

    return (
        <View style={styles.container}>
            <Text style={styles.rotulo}>{rotulo}</Text>

            <Pressable style={styles.campo} onPress={() => setAberto(true)}>
                <Text style={selecionada ? styles.valor : styles.placeholder}>
                    {selecionada ? selecionada.label : placeholder}
                </Text>
                <Text style={styles.seta}>▾</Text>
            </Pressable>

            <Modal visible={aberto} transparent animationType="fade" onRequestClose={() => setAberto(false)}>
                <Pressable style={styles.fundo} onPress={() => setAberto(false)}>
                    <View style={styles.lista}>
                        <Text style={styles.tituloLista}>{rotulo}</Text>
                        <FlatList
                            data={opcoes}
                            keyExtractor={(o) => o.value}
                            renderItem={({ item }) => {
                                const ativo = item.value === valor;
                                return (
                                    <Pressable
                                        style={[styles.opcao, ativo && styles.opcaoAtiva]}
                                        onPress={() => {
                                            onChange(item.value);
                                            setAberto(false);
                                        }}
                                    >
                                        <Text style={[styles.textoOpcao, ativo && styles.textoOpcaoAtiva]}>
                                            {item.label}
                                        </Text>
                                        {ativo ? <Text style={styles.check}>✓</Text> : null}
                                    </Pressable>
                                );
                            }}
                        />
                    </View>
                </Pressable>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { gap: 6 },
    rotulo: { fontSize: 14, fontWeight: '600', color: '#333' },
    campo: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        borderWidth: 1, borderColor: cores.borda, borderRadius: raio,
        paddingHorizontal: 14, paddingVertical: 13, backgroundColor: cores.branco,
    },
    valor: { fontSize: 16, color: cores.texto },
    placeholder: { fontSize: 16, color: '#999' },
    seta: { fontSize: 16, color: cores.textoSuave },

    fundo: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'center', padding: 24 },
    lista: { backgroundColor: cores.branco, borderRadius: 16, paddingVertical: 8, maxHeight: '70%' },
    tituloLista: {
        fontSize: 13, fontWeight: '700', color: cores.textoSuave, textTransform: 'uppercase',
        paddingHorizontal: 18, paddingVertical: 10,
    },
    opcao: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
        paddingHorizontal: 18, paddingVertical: 14,
    },
    opcaoAtiva: { backgroundColor: cores.primariaClara },
    textoOpcao: { fontSize: 16, color: cores.texto },
    textoOpcaoAtiva: { color: cores.primaria, fontWeight: '700' },
    check: { color: cores.primaria, fontSize: 16, fontWeight: '700' },
});

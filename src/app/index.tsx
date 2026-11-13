import { useNotas } from '@/hooks/medias';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Linha = { id: number; nota: string; peso: string };

export default function Index() {
  const { linhas, media, adicionarNota, removerNota, atualizar, simular, meta, setMeta, resp, setResp } = useNotas();


  return (
    <SafeAreaView style={styles.tela}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.conteudo} keyboardShouldPersistTaps="handled">
          <Text style={styles.titulo}>Média com pesos</Text>

          {linhas.map((linha, i) => (
            <View key={linha.id} style={styles.grupo}>
              <View style={styles.campo}>
                <Text style={styles.rotulo}>Nota {i + 1}</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Ex.: 7,5"
                  placeholderTextColor="#999"
                  keyboardType="decimal-pad"
                  value={linha.nota}
                  onChangeText={(t) => atualizar(linha.id, 'nota', t)}
                />
              </View>

              <View style={styles.campo}>
                <Text style={styles.rotulo}>Peso {i + 1}</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Ex.: 2"
                  placeholderTextColor="#999"
                  keyboardType="decimal-pad"
                  value={linha.peso}
                  onChangeText={(t) => atualizar(linha.id, 'peso', t)}
                />
              </View>

            </View>
          ))}
          <View style={styles.campo}>
            <Text style={styles.rotulo}>Média desejada</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex.: 6,5"
              placeholderTextColor="#999"
              keyboardType="decimal-pad"
              value={meta}
              onChangeText={setMeta}
            />
          </View>
          <Pressable
            style={({ pressed }) => [styles.botaoSecundarioRemover, pressed && { opacity: 0.85 }]}
            onPress={() => {
              const ultimaLinha = linhas[linhas.length - 1];
              if (ultimaLinha) removerNota(ultimaLinha.id);
            }}
          >
            <Text style={styles.textoBotaoSecundarioRemover}>- Remover nota</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [styles.botaoSecundario, pressed && { opacity: 0.85 }]}
            onPress={adicionarNota}
          >
            <Text style={styles.textoBotaoSecundario}>+ Adicionar nota</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [styles.botao, pressed && { opacity: 0.85 }]}
            onPress={simular}
          >
            <Text style={styles.textoBotao}>Enviar</Text>
          </Pressable>

          <View>
            <Text>{resp}</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: '#fff' },
  conteudo: { padding: 24, gap: 16 },
  titulo: { fontSize: 26, fontWeight: '700', color: '#1a1a1a', marginBottom: 8 },
  grupo: {
    flexDirection: 'row',
    gap: 12,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  campo: { flex: 1, gap: 6 },
  rotulo: { fontSize: 14, fontWeight: '600', color: '#333' },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    color: '#1a1a1a',
  },
  botaoSecundario: {
    borderWidth: 1.5,
    borderColor: '#6b5bd2',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  textoBotaoSecundario: { color: '#6b5bd2', fontSize: 16, fontWeight: '700' },
  botaoSecundarioRemover: {
    borderWidth: 1.5,
    borderColor: '#d25b5b',
    backgroundColor: '#d25b5b',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  textoBotaoSecundarioRemover: { color: '#ffffff', fontSize: 16, fontWeight: '700' },
  botao: {
    backgroundColor: '#6b5bd2',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  textoBotao: { color: '#fff', fontSize: 16, fontWeight: '700' },
});
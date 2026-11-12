import { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);

    function handleEntrar() {
        // TODO: sua lógica de login aqui
    }

    function handleEsqueciSenha() {
        // TODO
    }

    function handleCriarConta() {
        // TODO
    }

    return (
        <SafeAreaView style={styles.tela}>
            <KeyboardAvoidingView
                style={styles.conteudo}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <View style={styles.cabecalho}>
                    <View style={styles.logo}>
                        <Text style={styles.logoTexto}>x̄</Text>
                    </View>
                    <Text style={styles.titulo}>Média com pesos</Text>
                    <Text style={styles.subtitulo}>Entre para acompanhar suas notas</Text>
                </View>

                <View style={styles.form}>
                    <Text style={styles.rotulo}>E-mail</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="seuemail@exemplo.com"
                        placeholderTextColor="#999"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoComplete="email"
                        value={email}
                        onChangeText={setEmail}
                    />

                    <Text style={styles.rotulo}>Senha</Text>
                    <View style={styles.campoSenha}>
                        <TextInput
                            style={[styles.input, styles.inputSenha]}
                            placeholder="Sua senha"
                            placeholderTextColor="#999"
                            secureTextEntry={!mostrarSenha}
                            autoComplete="password"
                            value={senha}
                            onChangeText={setSenha}
                        />
                        <Pressable
                            style={styles.botaoOlho}
                            onPress={() => setMostrarSenha((v) => !v)}
                            hitSlop={10}
                        >
                            <Text style={styles.textoOlho}>{mostrarSenha ? 'Ocultar' : 'Mostrar'}</Text>
                        </Pressable>
                    </View>

                    <Pressable onPress={handleEsqueciSenha} style={styles.linkEsqueci}>
                        <Text style={styles.link}>Esqueci minha senha</Text>
                    </Pressable>

                    <Pressable
                        style={({ pressed }) => [styles.botao, pressed && styles.botaoPressionado]}
                        onPress={handleEntrar}
                    >
                        <Text style={styles.textoBotao}>Entrar</Text>
                    </Pressable>
                </View>

                <View style={styles.rodape}>
                    <Text style={styles.textoRodape}>Ainda não tem conta? </Text>
                    <Pressable onPress={handleCriarConta}>
                        <Text style={styles.link}>Criar conta</Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const ROXO = '#6b5bd2';

const styles = StyleSheet.create({
    tela: { flex: 1, backgroundColor: '#fff' },
    conteudo: { flex: 1, paddingHorizontal: 24, justifyContent: 'center' },

    cabecalho: { alignItems: 'center', marginBottom: 40 },
    logo: {
        width: 72, height: 72, borderRadius: 20, backgroundColor: '#f3f0ff',
        alignItems: 'center', justifyContent: 'center', marginBottom: 16,
    },
    logoTexto: { fontSize: 36, fontWeight: '800', color: ROXO },
    titulo: { fontSize: 28, fontWeight: '700', color: '#1a1a1a' },
    subtitulo: { fontSize: 15, color: '#666', marginTop: 6 },

    form: { gap: 6 },
    rotulo: { fontSize: 14, fontWeight: '600', color: '#333', marginTop: 10 },
    input: {
        borderWidth: 1, borderColor: '#ddd', borderRadius: 12,
        paddingHorizontal: 14, paddingVertical: 14, fontSize: 16, color: '#1a1a1a',
        backgroundColor: '#fafafa',
    },
    campoSenha: { justifyContent: 'center' },
    inputSenha: { paddingRight: 80 },
    botaoOlho: { position: 'absolute', right: 14 },
    textoOlho: { color: ROXO, fontWeight: '600', fontSize: 14 },

    linkEsqueci: { alignSelf: 'flex-end', marginTop: 8 },
    link: { color: ROXO, fontWeight: '600', fontSize: 14 },

    botao: {
        backgroundColor: ROXO, borderRadius: 12, paddingVertical: 16,
        alignItems: 'center', marginTop: 24,
    },
    botaoPressionado: { opacity: 0.85 },
    textoBotao: { color: '#fff', fontSize: 17, fontWeight: '700' },

    rodape: { flexDirection: 'row', justifyContent: 'center', marginTop: 32 },
    textoRodape: { color: '#666', fontSize: 14 },
});

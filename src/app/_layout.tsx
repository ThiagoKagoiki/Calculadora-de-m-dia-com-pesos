// Define a navegação em "pilha": cada tela abre por cima da anterior,
// com botão de voltar e título no topo.
import { cores } from '@/constants/tema';
import { Stack } from 'expo-router';


export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTintColor: cores.primaria,
        headerTitleStyle: { color: cores.texto, fontWeight: '700' },
        headerStyle: { backgroundColor: cores.fundo },
        headerShadowVisible: false,
        headerBackTitle: 'Voltar',
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="calcular" options={{ title: 'Calcular média' }} />
      <Stack.Screen name="materias/index" options={{ title: 'Minhas médias' }} />
      <Stack.Screen name="materias/nova" options={{ title: 'Nova matéria' }} />
    </Stack>
  );
}

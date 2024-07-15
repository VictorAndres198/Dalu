import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigation from './components/nav/bottomnav';

export default function App() {
  return (
    <SafeAreaProvider >
      <Navigation />
    </SafeAreaProvider>
  );
}

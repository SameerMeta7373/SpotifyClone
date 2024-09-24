import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';

import MainNavigation from './src/Components/Navigation/MainNavigation';
import {PersistGate} from 'redux-persist/integration/react';
import { persistor, store } from './Store/Redux/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading= {null} persistor={persistor}>
        <GestureHandlerRootView>
          <MainNavigation />
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
}

export default App;

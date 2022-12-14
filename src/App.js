
import { Provider } from "react-redux";
import { Pages} from "./components/home/pages/Pages";
import './styles/main.scss'
import store from "controller/store";
import {PersistGate} from 'redux-persist/integration/react'
import{persistStore} from "redux-persist"

function App() {
  let persistor = persistStore(store)
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Pages/>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;

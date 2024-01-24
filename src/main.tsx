import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { store } from './store/store';
import MainApp from './Navigate/MainApp';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);
root.render(
  <Provider store={store}>
    <Router>
      <MainApp />
    </Router>
  </Provider>
);

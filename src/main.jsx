import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux'; // 1
import { Store } from './Container/store.jsx';
import { BrowserRouter } from 'react-router';
console.log(Store);

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

import './css/icon-font.css';
import './main.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

// 將 VDOM 渲染到網頁上
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

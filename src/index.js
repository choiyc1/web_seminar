import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // CSS 파일 (선택사항)
import App from './App'; // App 컴포넌트 임포트

ReactDOM.render(
  <React.StrictMode>
    <App />  {/* App 컴포넌트 렌더링 */}
  </React.StrictMode>,
  document.getElementById('root') // public/index.html에 있는 <div id="root"></div>에 렌더링
);

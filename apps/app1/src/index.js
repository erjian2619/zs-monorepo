import React from 'react';
import { createRoot } from 'react-dom/client'
import Demo from './pages/antd-try';

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<Demo />)

console.log('render');
/**
 * App.jsx — Page Registry
 *
 * ページを追加するには：
 *   1. src/pages/ に新しいファイルを作成（例: About.jsx）
 *   2. 下の NAV_PAGES または HIDDEN_PAGES にエントリを追加するだけ
 *      inNav: true  → ナビゲーションバーに表示される
 *      inNav: false → ルートは存在するがナビには表示しない
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// --- Pages ---
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
// import About from './pages/About';   ← 新しいページはここでインポート

/**
 * ナビゲーションバーに表示されるページ
 * label: ナビのリンクテキスト
 */
export const NAV_PAGES = [
    { path: '/projects', label: 'Projects', element: <Projects /> },
    { path: '/blog',     label: 'DevLog',   element: <Blog />     },
    { path: '/contact',  label: 'Contact',  element: <Contact />  },
    // { path: '/about', label: 'About', element: <About /> },  ← ここに追加
];

/**
 * ルートは存在するがナビに表示しないページ
 */
const HIDDEN_PAGES = [
    { path: '/',              element: <Home />          },
    { path: '/projects/:id',  element: <ProjectDetail /> },
];

const App = () => (
    <Router>
        <Routes>
            {[...HIDDEN_PAGES, ...NAV_PAGES].map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
            ))}
        </Routes>
    </Router>
);

export default App;

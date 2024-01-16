import './App.css'

import React, { useEffect, useState } from 'react'

import logo from './logo.svg'

function App() {
  const [count, setCount] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const handleToggleDarkMode = () => {
    setIsDarkMode((prev) => !prev)
  }

  useEffect(() => {
    const mode = localStorage.getItem('dark_mode')
    if (mode === 'dark') {
      setIsDarkMode(true)
    }
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('dark_mode', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.removeItem('dark_mode')
    }
  }, [isDarkMode])

  return (
    <div className="App bg-white dark:bg-slate-800">
      <button onClick={handleToggleDarkMode}>toggle</button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="header mb-1  mt-4 flex-1 pt-2  text-gray-700 dark:text-white">
          🚀 Vite + React + Typescript 🤘 & <br />
          Eslint 🔥+ Prettier
        </p>

        <div className="body">
          <button onClick={() => setCount((count) => count + 1)}>
            🪂 Click me : {count}
          </button>

          <p> Don&apos;t forgot to install Eslint and Prettier in Your Vscode.</p>

          <p>
            Mess up the code in <code>App.tsx </code> and save the file.
          </p>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {' | '}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </div>
      </header>
    </div>
  )
}

export default App

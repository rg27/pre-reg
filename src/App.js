import React from 'react'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  return (
    <body class="leading-normal tracking-normal text-indigo-400 m-6 bg-cover bg-fixed" className="backImage">
      <div class="h-full">
          <Header/>
          <Main/>
      </div>
    </body>
  );
}

export default App;

import './App.css'
import AmbiguousCase from './components/AmbiguousCase'
import HeronsFormula from './components/HeronsFormula'
import NewtonsMethod from './components/NewtonsMethod'
import PolynomialFunction from './components/PolynomialFunction'

function App() {

  return (
    <body>
      <h1>Formula Calculator</h1>
      <div className='align'>
        <div className='calculator'>
          <div className='formula'>
            <HeronsFormula />
          </div>
          <div className='formula'>
            <AmbiguousCase />
          </div>
          <div className='formula'>
            <NewtonsMethod />
          </div>
          <div className='formula'>
            <PolynomialFunction />
          </div></div></div>
    </body>
  )
}

export default App

import "papercss"
import { Counter } from './components/Counter'
import MenuTools from './components/MenuTools'
import ComponentShow from './components/StateActual'


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <MenuTools />
                <ComponentShow />
            </header>
        </div>
    )
}

export default App

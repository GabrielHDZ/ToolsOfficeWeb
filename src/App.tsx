
import "papercss"
import { Counter } from './components/Counter'
import { Form } from './components/taskForm'
import MenuTools from './components/MenuTools'


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <MenuTools />
                <Counter inicial={23} />
                <Form />
            </header>
        </div>
    )
}

export default App

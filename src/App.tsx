import { useState } from 'react'
import { useDispatch } from 'react-redux'
import logo from './logo.svg'
import "papercss"
import { Counter } from './components/Counter'
import { Form } from './components/taskForm'


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Counter inicial={23} />
                <Form />
            </header>
        </div>
    )
}

export default App

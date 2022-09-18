import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <>
                <div id="sidebar">
                    <h1>React Router Contacts</h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to="../Calculadora">Calculadora</Link>
                            </li>
                            <li>
                                <a href={`contacts/2`}>Your Friend</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div id="detail"></div>
            </>
        )
    }
}

export default Navbar

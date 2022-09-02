import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { positionOne, positionTwo } from '../redux/reducers/menuTools'

function MenuTools() {

    const dispatch = useDispatch()
    return (
        <ul>
            <li><button onClick={() => dispatch(positionOne())}>Calculadora</button></li>
            <li>Web Convert PDF</li>
            <li>Convert Documents</li>
            <li>Web Scrapping</li>
            <li>Figuras geometricas</li>
            <li>Quimica</li>
        </ul>
    )
}

export default MenuTools
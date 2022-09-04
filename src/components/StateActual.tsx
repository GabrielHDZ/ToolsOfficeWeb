import React from 'react'
import { useSelector } from 'react-redux'
import { showPosition } from '../redux/reducers/menuTools'


function StateActual() {
    const showData = useSelector(showPosition);
    return (
        <div><span>{showData}</span></div>
    )
}

export default StateActual
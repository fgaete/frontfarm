import axios from "axios";
import React, { useEffect, useState } from "react";
import ConsoleUnit from './ConsoleUnit'

function ConsoleList(){

    const[consoles, setConsole] = useState([])

    useEffect(() => {
        axios.get('consolas').then(res => {
            setConsole(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const consoleList = consoles.map(consola => {
        return (
                <ConsoleUnit consola={consola}/>
        )
    })

    return (
        <div>
            <h2>Listar consolas</h2>
            <table class="table table-responsive">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Compañía</th>
                    <th>Año Lanzamiento</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            {consoleList}
            </table>
        </div>
    )
}

export default ConsoleList
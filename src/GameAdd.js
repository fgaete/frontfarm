import React, { useState } from "react";
import uniqid from 'uniqid'
import axios from 'axios'
function GameAdd(){
    //Hooks
    const[console, setConsole] = useState('')
    const[name, setName] = useState('')
    const[year, setYear] = useState('')

    function addGame(){
        var game = {
            console: console,
            name: name,
            year: year,
            gameid: uniqid()
        }
        console.log(game)

        axios.post('api/games/addgame',game)
        .then(res=>{
            alert(res.data)
        })
        .then(err =>{console.log('error: '+err)})
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <h2 className="mt-4">Agregar Juegos</h2>
                </div>
                <div className="row">
                    <div className="col-sm-6 offset-3">
                        <div className="mb-3">
                            <label htmlFor="console" className="form-label">Consola</label>
                            <input type="text" className="form-control" value={console} onChange={(e) => {setConsole(e.target.value)}}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nombre</label>
                            <input type="text" className="form-control" value={name} onChange={(e) => {setName(e.target.value)}}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="year" className="form-label">Año</label>
                            <input type="text" className="form-control" value={year} onChange={(e) => {setYear(e.target.value)}}></input>
                        </div>

                        <button onClick={addGame} className="btn btn-success">Guardar Juego</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameAdd
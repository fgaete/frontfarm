import React, { useState } from "react";
import uniqid from 'uniqid'
import axios from 'axios'

function ConsoleAdd(){
    const[name, setName] = useState('')
    const[company, setCompany] = useState('')
    const[year, setYear] = useState('')

    function addConsole(){
        var consoles = {
            name: name,
            company: company,
            year: year,
            consoleid: uniqid()
        }

        axios.post('consolas',consoles)
        .then(res=>{
            alert("Consola ingresada exitosamente!")
            window.location.reload()
        })
        .then(err =>{console.log('error: '+err)})
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <h2 className="mt-4">Agregar Consola</h2>
                </div>
                <div className="row">
                    <div className="col-sm-6 offset-3">
                        <div className="mb-3">
                            <input type="text" placeholder="Nombre" className="form-control" value={name} onChange={(e) => {setName(e.target.value)}}></input>
                        </div>
                        <div className="mb-3">
                            <input type="text" placeholder="Compañía" className="form-control" value={company} onChange={(e) => {setCompany(e.target.value)}}></input>
                        </div>
                        <div className="mb-3">
                            <input type="text" placeholder="Año" className="form-control" value={year} onChange={(e) => {setYear(e.target.value)}}></input>
                        </div>

                        <button onClick={addConsole} className="btn btn-success">Guardar Consola</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConsoleAdd
import React, { useEffect, useState } from "react";
import uniqid from 'uniqid'
import axios from 'axios'
import { useParams } from "react-router-dom";

function ConsoleEdit(){
    const params = useParams()

    const[name, setName] = useState('')
    const[company, setCompany] = useState('')
    const[year, setYear] = useState('')

    useEffect(() => {
        axios.get('/consolas/', {consoleid: params.consoleid}).then(res => {
                console.log(res.data)
                const consoladata = res.data[0]
                setName(consoladata.name)
                setCompany(consoladata.company)
                setYear(consoladata.year)
            })
        })

    function editConsole(){
        var consoles = {
            name: name,
            company: company,
            year: year
        }

        axios.post('consolas',consoles)
        .then(res=>{
            alert(res.data)
        })
        .then(err =>{console.log('error: '+err)})
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <h2 className="mt-4">Editar Consola: {params.consoleid}</h2>
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

                        <button onClick={editConsole} className="btn btn-success">Guardar Cambios</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConsoleEdit
import React, { useState } from "react";
import uniqid from 'uniqid'
import axios from 'axios'

function UserAdd(){
    const[localid, setRut] = useState('')
    const[name, setName] = useState('')
    const[birth, setBirth] = useState('')

    function addUser(){
        var user = {
            localid: localid,
            name: name,
            birth: birth,
            userid: uniqid()
        }
        console.log(user)

        axios.post('api/users/adduser',user)
        .then(res=>{
            alert(res.data)
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
                            <label htmlFor="company" className="form-label">Rut</label>
                            <input type="text" className="form-control" value={localid} onChange={(e) => {setRut(e.target.value)}}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nombre</label>
                            <input type="text" className="form-control" value={name} onChange={(e) => {setName(e.target.value)}}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="year" className="form-label">Año de nacimiento</label>
                            <input type="text" className="form-control" value={birth} onChange={(e) => {setBirth(e.target.value)}}></input>
                        </div>

                        <button onClick={addUser} className="btn btn-success">Guardar Usuario</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserAdd
import React from "react";
import {Link} from 'react-router-dom';


function ConsoleUnit({consola}){
    return (
                <tbody>
                    <tr>
                        <td>{consola.name}</td>
                        <td>{consola.company}</td>
                        <td>{consola.year}</td>
                        <td><Link to={`/editconsole/${consola.id}`}><button className="btn btn-success">Editar</button></Link></td>
                        <td><button className="btn btn-danger">Borrar</button></td>
                    </tr>
                </tbody>
    )
}

export default ConsoleUnit
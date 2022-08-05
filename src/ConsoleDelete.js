import React, { useEffect, useState } from "react";
import uniqid from 'uniqid'
import axios from 'axios'
import { useParams } from "react-router-dom";

function ConsoleDelete(){
    const params = useParams()

    axios.delete('consolas',{consoleid: params.consoleid})
        .then(res=>{
            alert("Registro eliminado correctamente!!")
            window.location.reload()
        })
        .then(err =>{console.log('error: '+err)})
}

export default ConsoleDelete
import React, { useState} from 'react'
import { useParams } from 'react-router'

export default function Listing(props) {

    let {id} = useParams()

    return (
        <div>
            <p>yee{id}</p>
        </div>
    )
}
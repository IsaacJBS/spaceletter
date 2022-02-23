import React from 'react'
import { Rings } from 'react-loader-spinner';

function Loader() {
    return (
        <Rings
            height={40}
            width={40}
            color='#4C1B27'
            ariaLabel='loading'
        />
    )
}

export default Loader
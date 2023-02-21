import { useState } from 'react'

const Hooks = () => {
    const [sayac, setsayac] = useState(0)
    const arttir = () => {
        setsayac(sayac + 1
        )
    }
    return (
        <div>
            <h2>*********************************************************</h2>
            <h1>USESTATE</h1>
            <h2>COUNT: <Span>{sayac}</Span></h2>
            <button className='btn btn-primary'>Arttir</button>
            <button className='btn btn-warning' >Azalt</button>
            <button className='btn btn-danger'>Temizle</button>
        </div>
    )
}

export default Hooks
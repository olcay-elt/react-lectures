import { useState } from 'react'
import { FaReact } from "react-icons/fa";
const MouseKeyboard = () => {

    const [xEkseni, setX] = useState(0)
    const [yEkseni, setY] = useState(0)

    const mouseOlayi = (e) => {
        setX(e.pageX)
        setY(e.pageY)

    }

    const klavyeOlayi = (e) => {
        if (e.keyCode >= 48 && e.keyCode <= 57) {
            alert("bastiginiz klavye tusu bir rakamdir")
        } else {
            alert("bastiginiz klavye tusu bir rakam degildir")
        }
    }

    return (
        <div className="container text-center mt-4 d-flex flex-column align-items-center">
            <h2 className="text-danger">MOUSE EVENTS</h2>
            <p>X ve Y</p>
            <p className="text-danger fw-bold">
                {xEkseni} {yEkseni}
            </p>

            <div
                className="bg-success text-light w-50 p-4"
                id="coord"
                onMouseMove={mouseOlayi}
            >
                KOORDİNATLAR <FaReact />
            </div>

            <div>
                <h2 className='text-danger mt-4'>KEYBOARDS EVENTS</h2>
                <input type="text" className='form-control' />

                onKeyDown={klavyeOlayi}
            </div>
        </div>
    );
}

export default MouseKeyboard
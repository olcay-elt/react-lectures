import React, { memo } from 'react'

const ClearButton = ({ handleClear }) => {
    console.log("Render => ClearButton componenti")
    return (
        <div>
            <button className='btn btn-info' onClick={handleClear}>ClearButton</button>
        </div>
    )
}

export default memo(ClearButton)
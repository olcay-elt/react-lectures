import React, { memo } from 'react'

const TaxComp = ({ taxData }) => {
    console.log("Render => TaxComp componenti")
    return (
        <div>TaxComp : {taxData.current.ship} </div>
    )
}

export default memo(TaxComp)
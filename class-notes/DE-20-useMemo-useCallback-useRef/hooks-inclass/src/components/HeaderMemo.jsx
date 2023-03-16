import React, { memo } from 'react'

const HeaderMemo = memo(() => {
    console.log("Render  => HeaderMemo Componenti")
    return (
        <div className='text-center text-success'>HeaderMemo Componenti</div>
    )
})

export default HeaderMemo
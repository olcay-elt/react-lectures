import React, { memo } from 'react'

// React.memo

const HeaderMemo = memo(({ count }) => {
    console.log("Render => HeaderMemo componenti")
    return (
        <div className='text-center text-success'>
            HeaderMemo Componenti
            <p>Header Memo : {count > 5 && count < 10 ? 3 : count}</p>
        </div>
    )
})

export default HeaderMemo

//2.yol
// const HeaderMemo = () => {
//   console.log("Render => HeaderMemo componenti")
//   return (
//     <div className='text-center text-success'>HeaderMemo Componenti</div>
//   )
// }

// export default memo(HeaderMemo)

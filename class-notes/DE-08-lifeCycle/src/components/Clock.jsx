import React from 'react'
import { useState } from 'react';
import moment from "moment"

const Clock = () => {
    const [zaman, setZaman] = useState(moment())

    return (
        <div>
            {zaman.format("HH")}
            {zaman.format("mm")}
        </div>
    )
};

export default Clock;
import React, { useState } from 'react'
import Button from './Button';
import Card from '../Card';

import "./styles.css"

const View = (props) => {
    const [open, set] = useState(false)

    return (
        <>
            <div className={"grid column-two full-width"}>
                {props.data && props.data.map(e => {
                    return (
                        <Card key={e.uuid.toString()} data={e} />
                    )
                })}
            </div>
            <Button setData={props.setData} />
        </>
    )
}

export default View

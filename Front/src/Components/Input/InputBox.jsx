import React from 'react'

const InputBox = ({title,type,style,data,change,iStyle}) => {
    return (
        <div className='inputBox' style={{...style}}>
            <p>{title}</p>
            <input type={type} 
                value = {data} 
                onChange = {change}
                style={{...iStyle}}
            />
        </div>
    )
}

export default InputBox

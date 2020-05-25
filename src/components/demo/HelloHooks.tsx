import React,{useEffect,useState} from 'react'
import {Button} from 'antd'

interface Greeting {
    name: string,
    // firstName?: string,
    // lastName?: string
}

const HelloHooks = (props: Greeting) => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState<string | null>(null)
    useEffect(() =>{
        if(count > 5){
            setText('rest')
        }
    },[count])
    return (
            <>
                <p>Click {count} times {text}</p>
                <Button onClick={() => {setCount(count+1)}} type="primary" >Hello {props.name}</Button>
            </>
    )
}


export default HelloHooks
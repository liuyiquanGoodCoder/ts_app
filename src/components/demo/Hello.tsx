import React from 'react'
import {Button} from 'antd'

interface Greeting {
    name: string,
    // firstName?: string,
    // lastName?: string
}

const Hello = (props: Greeting) => <Button type="primary">Hello {props.name}</Button>

// const Hello: React.FC<Greeting> = ({
//     name,
//     firstName,
//     lastName
// }) => <Button type="primary">Hello {name}</Button>

// Hello.defaultProps = {
//     firstName:"",
//     lastName:""
// }

export default Hello
import React,{ Component } from 'react'
import {Form, Input, Select, Button} from 'antd'
import { EmployeeRequest } from '../../interface/employee'

const {Option} = Select

class QueryForm extends Component<{}, EmployeeRequest> {
    state: EmployeeRequest = {
        name: '',
        departmentId: undefined
    }
    handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            name:e.currentTarget.value
        })
    }
    handDepartmentChange = (value: number) => {
        this.setState({
            departmentId:value
        })
    }
    handleSubmit = () => {
        this.queryEmployee(this.state)
    }
    componentDidMount(){
        this.queryEmployee(this.state)
    }
    queryEmployee(param: EmployeeRequest){
        console.log(param)
    }
    render() {
        return(
            <Form layout='inline'>
                <Form.Item>
                    <Input 
                        placeholder='name'
                        style={{width: 120}}
                        allowClear
                        value={this.state.name}
                        onChange={this.handleNameChange}
                    />
                </Form.Item>
                <Form.Item>
                    <Select
                        placeholder="department"
                        style={{width: 120}}
                        allowClear
                        value={this.state.departmentId}
                        onChange = {this.handDepartmentChange}
                    >
                        <Option value={1}>Technology</Option>
                        <Option value={2}>Products</Option>
                        <Option value={3}>Market</Option>
                        <Option value={4}>Operation</Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button type='primary' onClick={this.handleSubmit}>Search</Button>
                </Form.Item>
            </Form>
        )
    }
}

const WrapQueryForm = Form.create({
    name: 'employee_query'
})(QueryForm)

export default WrapQueryForm
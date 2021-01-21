import React from 'react'
import { Form, Input, Button, InputNumber } from 'antd'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
}
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
}


function Login() {
    const [form] = Form.useForm()

    // make it so age can't go negative or over 150


    return (
        <>
            <Form
                onFinish={(eventInfo) => console.log("object", eventInfo)}
                {...layout}
                label="login"
                form={form}>
                <Form.Item
                    label='Username'
                    name='username'
                    rules={[{ required: true, message: "Username is required" }]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label='Email'
                    name='email'
                    rules={[{ required: true, message: "Email is required" }]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label='Age:'
                    name='age'
                    >
                    <InputNumber style={{color: "white"}}/>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type='primary' htmlType='submit'>Login</Button>
                    {" "}
                    <Button>Or Signup</Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default Login

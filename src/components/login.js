import React from 'react'
import { Form, Input, Button, InputNumber, Layout, Breadcrumb, Menu } from 'antd'
const { Header, Content, Footer } = Layout;


const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 12 },
}
const tailLayout = {
    wrapperCol: { offset: 6, span: 12 }
}


function Login() {
    const [form] = Form.useForm()


    return (
        <Layout className='layout'>
            <Header style={{color: "white"}}>
                hot girl shit
            </Header>
            <Content>
                <Form
                    onFinish={(eventInfo) => console.log("object", eventInfo)}
                    {...layout}
                    label="login"
                    form={form}
                    style={{paddingTop: "24px"}}>
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
                        label='Age'
                        name='age'
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type='primary' htmlType='submit'>Login</Button>
                        {" "}
                        <Button>Or Signup</Button>
                    </Form.Item>
                </Form>
            </Content>
            <Footer style={{ textAlign: 'center' }}> Copyright Hal Dunn 2021 Don't Steal This Amazing Website Or Else</Footer>
        </Layout>
    )
}

export default Login


// make it so age can't go negative or over 150

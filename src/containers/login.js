import React, { useState } from 'react'
import _ from 'lodash'
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
} from 'semantic-ui-react'

const Login = ({ handleChangePage }) => {
    const [user, setUser] = useState()
    const [pass, setPass] = useState()
    const handleLogin = (user = '', pass = '') => {
        if (!_.isEmpty(user) && !_.isEmpty(pass)) {
            return handleChangePage('form')
        }
    }
    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    Sign In
        </Header>
                <Form size='large'>
                    <Segment stacked>
                        <Form.Input
                            fluid
                            icon='user'
                            iconPosition='left'
                            placeholder='E-mail address'
                            onChange={(e, { value }) => setUser(value)}

                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                            onChange={(e, { value }) => setPass(value)}

                        />

                        <Button color='teal' fluid size='large' onClick={() => handleLogin(user, pass)}>
                            Sign in
            </Button>
                    </Segment>
                </Form>
                <Message>
                    New user <a href='#'>Sign Up</a>
                </Message>
            </Grid.Column>
        </Grid>
    )
}

export default Login

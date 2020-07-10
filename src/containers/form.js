import React, { useState } from 'react'
import { Menu, Grid, Form, Button, Input } from 'semantic-ui-react'
import AvatarItem from '../components/avatarItem'

const FormInput = () => {
    const [title, setTitle] = useState()
    const [des, setDes] = useState()
    const [rate, setRate] = useState()
    const [list, setList] = useState([])

    const handleAddItem = () => {
        const newItem = { title, des, rate }
        const newList = [...list, newItem]
        setList(newList)
    }

    return (
        <div>
            <Menu>
                <Menu.Item header>Our Company</Menu.Item>
                <Menu.Item name='File' />
                <Menu.Item name='Edit' />
                <Menu.Item name='Option' />
                <Menu.Item name='Tools' />
                <Menu.Item name='Windows' />
            </Menu>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={8}>
                        {
                            !!list && list.map(item =>
                                <AvatarItem title={item.title} des={item.des} rate={item.rate} />
                            )
                        }
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Form>
                            <Form.Field inline>
                                <label>Title</label>
                                <Input placeholder='input title' onChange={(e, { value }) => setTitle(value)} />
                            </Form.Field>
                            <Form.Field inline>
                                <label>Descript</label>
                                <Input placeholder='input descript' onChange={(e, { value }) => setDes(value)} />
                            </Form.Field>
                            <Form.Field inline>
                                <label>Rate</label>
                                <Input type='number' placeholder='1-5' onChange={(e, { value }) => setRate(value)} />
                            </Form.Field>
                            <Button primary onClick={() => handleAddItem()}>Add</Button>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default FormInput

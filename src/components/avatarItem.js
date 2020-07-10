import React from 'react'
import { Rating, Grid, Image, Header } from 'semantic-ui-react'
const AvatarItem = ({ title = '', rate = 0, des = '' }) => {
    return (
        <Grid columns={3}>
            <Grid.Row>
                <Grid.Column>
                    <Image src='/images/wireframe/media-paragraph.png' />
                </Grid.Column>
                <Grid.Column>
                    <Header as='h3'>{title}</Header>
                    <div><span>{des}</span></div>
                    <Rating icon='star' defaultRating={rate} maxRating={5} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )

}

export default AvatarItem
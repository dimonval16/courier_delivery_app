import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import delivery_photo from './delivery_photo.jpg';
import MainButton from '../buttons/MainButton';
import DataList from './data_list/DataList';
import {deliveryCardStyles} from './deliveryCardStyles';

export default function DeliveryCard({del}) {
    const s = deliveryCardStyles();
    const isFinished = del.PerformedByAPartner && del.DeliveredBy && del.payment;

    return (
        <Card className={s.root}>
            <CardActionArea>
                <CardMedia
                    className={s.image}
                    image={delivery_photo}
                    title={'delivery_photo'}
                />
            </CardActionArea>
            <CardContent className={s.content}>
                <Typography gutterBottom variant={'h5'} component={'h2'}>
                    {del.userAddress}
                </Typography>
                <Typography className={s.nameBlock} color={'textSecondary'} component={'p'}>
                    {`${del.userName}, ${del.userPhone}`}
                </Typography>
                <DataList del={del}/>
            </CardContent>
            <CardActions className={s.buttonCover}>
                <MainButton
                    className={s.button}
                    title={isFinished ? 'Завершено' : 'Принять'}
                    disabled={isFinished}
                    color={'primary'}
                />
            </CardActions>
        </Card>
    );
}
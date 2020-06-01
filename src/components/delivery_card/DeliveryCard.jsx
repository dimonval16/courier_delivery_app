import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import delivery_photo from './delivery_photo.jpg';
import MainButton from '../buttons/MainButton';
import DataList from './DataList';

const useStyles = makeStyles({
    root: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflowY: 'scroll'
    },
    image: {
        height: '30vh',
        marginTop: 56
    },
    buttonCover: {
        padding: '30px 0',
        position: 'fixed',
        bottom: '0',
        width: '100%',
        backgroundColor: 'white'
    },
    button: {
        width: '90%',
        margin: 'auto'
    },
    content: {
        width: '90%',
        margin: 'auto',
        padding: '16px 0'
    },
    nameBlock: {
        marginBottom: '0.4em'
    }
});

export default function DeliveryCard({del}) {
    const s = useStyles();
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
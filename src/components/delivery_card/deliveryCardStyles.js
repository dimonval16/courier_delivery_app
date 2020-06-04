import {makeStyles} from '@material-ui/core/styles';

export const deliveryCardStyles = makeStyles({
    root: {
        /*height: '100vh',*/
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

export const dataListStyles = makeStyles(theme => ({
    root:{
        marginBottom: 95,
    },
    list: {
        marginTop: 20,
        display: 'flex',
        justifyContent: 'space-between'
    },
    listFirst: {
        marginTop: 7,
        display: 'flex',
        justifyContent: 'space-between'
    },
    rightText: {
        textAlign: 'right'
    },
    badStatusText: {
        color: theme.palette.error.main
    },
    goodStatusText: {
        color: theme.palette.good.main
    }
}));
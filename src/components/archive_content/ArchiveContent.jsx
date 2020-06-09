import React from 'react';
import {withRouter} from 'react-router';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
    wrapper: {
        marginTop: 104
    }
});

const ArchiveContent = ({sessions, onWatchHistDeliveries, history}) => {
    const s = useStyles();

    const getSessionDate = data => {
        const startDate = new Date(data);
        const day = startDate.getDate();
        const month = startDate.getMonth() + 1;
        const year = startDate.getFullYear();

        return `Дата: ${day}.${month}.${year}`;
    }

    const getSessionTime = (start, finish) => {
        const startDate = new Date(start);
        const finishDate = new Date(finish);

        const startTime =
            `${startDate.getHours()}:${startDate.getMinutes() < 10 ? 
                `0${startDate.getMinutes()}` : startDate.getMinutes()}`;
        const finishTime =
            `${finishDate.getHours()}:${finishDate.getMinutes() < 10 ?
                `0${finishDate.getMinutes()}` : finishDate.getMinutes()}`;

        return `${startTime} - ${finishTime}`;
    }

    const handleButtonClick = session => {
        onWatchHistDeliveries(session);
        history.push('/courier/archivehistory');
    }

    return (
        <List className={s.wrapper}>
            {sessions.map((session, index) => (
                <div key={index}>
                    <ListItem>
                        <ListItemText
                            primary={session.endOfSession ?
                                getSessionDate(session.endOfSession) : 'Дата: сейчас активна'}
                            secondary={session.endOfSession ?
                                getSessionTime(session.startOfSession, session.endOfSession) : '...'}
                        />
                        <Button color={'primary'} onClick={() => handleButtonClick(session)}>
                            смотреть
                        </Button>
                    </ListItem>
                    <Divider/>
                </div>
            ))}
        </List>
    );
}

export default withRouter(ArchiveContent);
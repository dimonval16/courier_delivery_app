import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CustomIcon from '../../components/custom_icon/CustomIcon';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        width: '100%',
        zIndex: '1100',
        top: 56
    },
});

export default function CustomTab({tab, onSetTab}) {
    const s = useStyles();

    return (
        <Paper className={s.root}>
            <Tabs
                value={tab}
                variant={'fullWidth'}
                indicatorColor={'primary'}
                textColor={'primary'}
                onChange={(e, newValue) => onSetTab(newValue)}
            >
                <Tab icon={<CustomIcon icon={'format_list_bulleted'}/>} aria-label={'format_list_bulleted'}/>
                <Tab icon={<CustomIcon icon={'directions_bike'}/>} aria-label='directions_bike'/>
                <Tab icon={<CustomIcon icon={'check_circle'}/>} aria-label='check_circle'/>
            </Tabs>
        </Paper>
    );
}
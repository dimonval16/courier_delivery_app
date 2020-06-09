import React, {useState} from 'react';
import s from './StartEnd.module.css';
import {makeStyles} from '@material-ui/core/styles';
import HeaderMain from '../../components/headers/HeaderMain';
import SideDrawer from '../../components/side_drawer/SideDrawer';
import Logo from '../../components/logo/Logo';
import MainButton from '../../components/buttons/MainButton';

const useStyles = makeStyles(theme => ({
    mes: {
        color: theme.palette.error.main,
        textAlign: 'center',
    },
    mesHid: {
        display: 'none'
    }
}));

export default function StartEnd(props) {
    const sLocal = useStyles();

    const [values, setValues] = useState({isDrawerOpened: false, errorMes: false});

    const handleStartButton = title => {
        const date = new Date();
        if (title === 'Старт') {
            props.onStartSession();
            props.onSetOrdersContent(props.courierId, date);
        }

        props.history.push('/courier/orders');
    }

    const handleFinishButton = () => {
        const date = new Date();
        if (props.activeDeliveries.length > 0) {
            setValues({...values, errorMes: true})
        } else {
            props.onFinishSession(date);
            props.history.push('/courier/history');
        }
    }

    const handleSideDrawerClick = title => {
        if (title === 'Выйти') { props.onLogOut() }
        else if (title === 'Архив') { props.history.push('/courier/archive') }
    }

    return (
        <div className={s.wrapper}>
            <HeaderMain
                title={'Главная'}
                onButtonClick={() => setValues({...values, isDrawerOpened: true})}
            />
            <SideDrawer
                items={props.drawerItems}
                username={props.courierName}
                balance={props.balance}
                open={values.isDrawerOpened}
                onToggleDrawer={() => setValues({...values, isDrawerOpened: false})}
                onClick={handleSideDrawerClick}
            />
            <div className={s.content}>
                <Logo/>
                <div className={s.buttons}>
                    <MainButton
                        title={props.isSessionActive ? 'Продолжить' : 'Старт'}
                        color={'primary'}
                        onClick={handleStartButton}
                    />
                    <MainButton
                        title={'Финиш'}
                        color={'primary'}
                        disabled={!props.isSessionActive}
                        onClick={handleFinishButton}
                    />
                </div>
                <div className={values.errorMes ? sLocal.mes : sLocal.mesHid}>
                    Невозможно завершить сессию. Есть активные заказы.
                </div>
            </div>
        </div>
    );
}
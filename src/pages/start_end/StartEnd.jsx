import React, {useState} from 'react';
import s from './StartEnd.module.css';
import HeaderMain from '../../components/headers/HeaderMain';
import SideDrawer from '../../components/side_drawer/SideDrawer';
import Logo from '../../components/logo/Logo';
import MainButton from '../../components/buttons/MainButton';

export default function StartEnd(props) {
    const [values, setValues] = useState({isDrawerOpened: false});

    const handleFinishButton = () => {
        const date = new Date();
        props.onFinishSession(date);
        props.history.push('/courier/history');
    }

    const handleStartButton = title => {
        props.onStartSession();
        if (title === 'Старт') props.onSetOrdersContent(props.courierId);
        props.history.push('/courier/orders');
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
            </div>
        </div>
    );
}
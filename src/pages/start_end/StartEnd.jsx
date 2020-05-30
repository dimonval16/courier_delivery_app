import React, {useState} from 'react';
import s from './StartEnd.module.css';
import HeaderMain from '../../components/headers/HeaderMain';
import SideDrawer from '../../components/side_drawer/SideDrawer';
import Logo from '../../components/logo/Logo';
import MainButton from '../../components/buttons/MainButton';

export default function StartEnd(props) {
    const [values, setValues] = useState({isDrawerOpened: false});

    const handleFinishButton = () => {
        props.onFinishSession();
        props.history.push('/courier/history');
    }

    return (
        <div className={s.wrapper}>
            <HeaderMain
                title={'Главная'}
                onButtonClick={() => setValues({...values, isDrawerOpened: true})}
            />
            <SideDrawer
                items={props.drawerItems}
                username={props.userName}
                open={values.isDrawerOpened}
                onToggleDrawer={() => setValues({...values, isDrawerOpened: false})}
                onLogOut={title => title === 'Выйти' ? props.onLogOut() : null}
            />
            <div className={s.content}>
                <Logo/>
                <div className={s.buttons}>
                    <MainButton
                        title={props.isSessionActive ? 'Продолжить' : 'Старт'}
                        color={'primary'}
                        onClick={props.onStartSession}
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
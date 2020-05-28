import React, {useState} from "react";
import {connect} from 'react-redux';
import {logOutAC} from '../../redux/actions/mainA';
import s from './StartEnd.module.css';
import HeaderMain from '../../components/headers/HeaderMain';
import Logo from '../../components/logo/Logo';
import MainButton from '../../components/buttons/MainButton';
import SideDrawer from '../../components/side_drawer/SideDrawer';

function StartEndComponent({drawerItems, username, onLogOut}) {
    const [values, setValues] = useState({isDrawerOpened: false});

    return (
        <div className={s.wrapper}>
            <HeaderMain
                title={'Главная'}
                onButtonClick={() => setValues({...values, isDrawerOpened: true})}
            />
            <SideDrawer
                items={drawerItems}
                username={username}
                open={values.isDrawerOpened}
                onToggleDrawer={() => setValues({...values, isDrawerOpened: false})}
                onLogOut={title => title === 'Выйти' ? onLogOut() : null}
            />
            <div className={s.content}>
                <Logo/>
                <div className={s.buttons}>
                    <MainButton title={'Старт'}/>
                    <MainButton title={'Финиш'}/>
                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        drawerItems: state.sideDrawer.items,
        username: state.user.name
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onLogOut: () => dispatch(logOutAC())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartEndComponent);
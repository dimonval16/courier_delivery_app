import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import StartEnd from './StartEnd';
import {logOutAC} from '../../redux/actions/authorization_a/authorizationA';
import {finishSessionAC, startSessionAC,setOrdersContentAC} from '../../redux/actions/mainA';

function mapStateToProps(state) {
    return {
        drawerItems: state.sideDrawer.items,
        courierName: state.user.name,
        courierId: state.user.id,
        isSessionActive: state.user.isSessionActive,
        balance: state.user.balance,
        activeDeliveries: state.user.sessions[0].activeDeliveries
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onLogOut: () => dispatch(logOutAC()),
        onStartSession: () => dispatch(startSessionAC()),
        onSetOrdersContent: (courierId, date) => dispatch(setOrdersContentAC(courierId, date)),
        onFinishSession: date => dispatch(finishSessionAC(date))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(StartEnd));
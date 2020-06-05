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
        isSessionActive: state.user.isSessionActive
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onLogOut: () => dispatch(logOutAC()),
        onStartSession: () => dispatch(startSessionAC()),
        onSetOrdersContent: courierId => dispatch(setOrdersContentAC(courierId)),
        onFinishSession: date => dispatch(finishSessionAC(date))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(StartEnd));
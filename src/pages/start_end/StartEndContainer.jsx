import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import StartEnd from './StartEnd';
import {logOutAC} from '../../redux/actions/authorizationA/authorizationA';
import {finishSessionAC, startSessionAC} from '../../redux/actions/mainA';

function mapStateToProps(state) {
    return {
        drawerItems: state.sideDrawer.items,
        userName: state.user.name,
        isSessionActive: state.user.isSessionActive
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onLogOut: () => dispatch(logOutAC()),
        onStartSession: () => dispatch(startSessionAC()),
        onFinishSession: () => dispatch(finishSessionAC())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(StartEnd));
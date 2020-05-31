import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import FinishPage from "./FinishPage";
import {setDeliveryContentAC} from '../../redux/actions/mainA';


function mapStateToProps(state) {
    return {
        lastSession: state.user.sessions[0],
        finishedDeliveries: state.user.sessions[0].finishedDeliveries,
        balance: state.user.balance,
        deliveryPage: state.deliveryPage
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onWatchDelivery: data => dispatch(setDeliveryContentAC(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FinishPage));
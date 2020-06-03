import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import FinishPage from "./FinishPage";
import {setDeliveryContentAC} from '../../redux/actions/mainA';


function mapStateToProps(state) {
    return {
        lastSessionDate: state.user.sessions[0].endOfSession,
        finishedDeliveries: state.user.sessions[0].finishedDeliveries,
        balance: state.user.balance,
        deliveryPageId: state.deliveryPage.deliveryId
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onWatchDelivery: (del, use) => dispatch(setDeliveryContentAC(del, use))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FinishPage));
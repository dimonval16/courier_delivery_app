import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import WorkPage from './WorkPage';
import {setDeliveryContentAC, setTabStatusAC, updateOrdersContentAC} from '../../redux/actions/mainA';

function mapStateToProps(state) {
    return {
        deliveries: state.user.sessions[0].allDeliveries,
        activeDeliveries: state.user.sessions[0].activeDeliveries,
        finishedDeliveries: state.user.sessions[0].finishedDeliveries,
        sessionDate: state.user.sessions[0].startOfSession,
        balance: state.user.balance,
        deliveryPageId: state.deliveryPage.deliveryId,
        tab: state.workPage.tabStatus,
        courierId: state.user.id
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onWatchDelivery: (del, use) => dispatch(setDeliveryContentAC(del, use)),
        onSetTab: newValue => dispatch(setTabStatusAC(newValue)),
        onUpdateInfo: courierId => dispatch(updateOrdersContentAC(courierId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(WorkPage));
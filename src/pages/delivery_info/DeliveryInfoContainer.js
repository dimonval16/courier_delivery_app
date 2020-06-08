import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import DeliveryInfo from './DeliveryInfo';
import {clearDeliveryInfoAC, startNewOrderAC, finishOrderAC} from '../../redux/actions/mainA';

function mapStateToProps(state) {
    return {
        deliveryPage: state.deliveryPage,
        use: state.deliveryPage.use,
        courierId: state.user.id
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onCLearDeliveryInfo: () => dispatch(clearDeliveryInfoAC()),
        onStartOrder: (courierId, deliveryId) => dispatch(startNewOrderAC(courierId, deliveryId)),
        onFinishOrder: (courierId, deliveryId) => dispatch(finishOrderAC(courierId, deliveryId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DeliveryInfo));
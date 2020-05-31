import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import DeliveryInfo from './DeliveryInfo';
import {clearDeliveryInfoAC} from '../../redux/actions/mainA';

function mapStateToProps(state) {
    return {
        deliveryPage: state.deliveryPage,
        lastSession: state.user.sessions[0]
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onCLearDeliveryInfo: () => dispatch(clearDeliveryInfoAC())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DeliveryInfo));
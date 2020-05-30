import {connect} from 'react-redux';
import {withRouter} from "react-router";
import FinishPage from "./FinishPage";


function mapStateToProps(state) {
    return {
        lastSession: state.user.sessions[0],
        finishedDeliveries: state.user.sessions[0].finishedDeliveries,
        balance: state.user.balance
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FinishPage));
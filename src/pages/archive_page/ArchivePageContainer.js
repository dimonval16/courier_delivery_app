import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Archive from './Archive';
import {setArchiveTabAC, setArchiveDeliveriesAC} from '../../redux/actions/mainA';

const mapStateToProps = state => ({
    tab: state.archivePage.tabStatus,
    sessions: state.user.sessions
});

const mapDispatchToProps = dispatch => ({
    onArchiveSetTab: tab => dispatch(setArchiveTabAC(tab)),
    onWatchHistDeliveries: session => dispatch(setArchiveDeliveriesAC(session))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Archive));
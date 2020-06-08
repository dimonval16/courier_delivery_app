import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import ArchiveDeliveries from './ArchiveDeliveries';
import {setDeliveryContentAC} from '../../redux/actions/mainA';

const mapStateToProps = state => ({
    endOfSession: state.archivePage.archiveSession.endOfSession,
    archiveDeliveries: state.archivePage.archiveSession.archiveDeliveries,
    deliveryPageId: state.deliveryPage.deliveryId
});

const mapDispatchToProps = dispatch => ({
    onWatchDelivery: (del, use) => dispatch(setDeliveryContentAC(del, use))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ArchiveDeliveries));
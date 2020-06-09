import React from 'react';
import HeaderMain from '../../components/headers/HeaderMain';
import OrdersList from '../../components/orders_list/OrdersList';

export default function ArchiveDeliveries(props) {
    const getSessionDate = date => {
        const finishData = new Date(date);
        const day = finishData.getDate();
        const month = `${finishData.getMonth() + 1}`;
        const year = finishData.getFullYear();
        return `${day}.${month}.${year}`;
    }

    const clearArchiveHistory = () => {
        props.onClearArchiveDeliveriesPage();
        props.history.push('/courier/archive');
    }

    return (
        <>
            <HeaderMain
                title={'История'}
                rightTitle={props.endOfSession ? getSessionDate(props.endOfSession) : 'сейчас активна'}
                anotherIcon={'arrow_back_ios'}
                onButtonClick={clearArchiveHistory}
            />
            <OrdersList
                deliveries={props.archiveDeliveries}
                deliveryPageId={props.deliveryPageId}
                onWatchDelivery={props.onWatchDelivery}
                use={'ArchiveDeliveries'}
            />
        </>
    );
}
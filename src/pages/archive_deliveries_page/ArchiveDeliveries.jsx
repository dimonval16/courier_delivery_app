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

    return (
        <>
            <HeaderMain
                title={'История'}
                rightTitle={getSessionDate(props.endOfSession)}
                anotherIcon={'arrow_back_ios'}
                onButtonClick={() => props.history.push('/courier/archive')}
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
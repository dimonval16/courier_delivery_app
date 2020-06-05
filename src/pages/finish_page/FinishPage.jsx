import React from 'react';
import HeaderMain from '../../components/headers/HeaderMain';
import OrdersList from '../../components/orders_list/OrdersList';
import Footer from '../../components/footer/Footer';

export default function FinishPage(props) {
    const getSessionDate = () => {
        const finishData = new Date(props.lastSessionDate);
        const day = finishData.getDate();
        const month = `${finishData.getMonth() + 1}`;
        const year = finishData.getFullYear();
        return `${day}.${month}.${year}`;
    }

    return (
        <div>
            <HeaderMain
                title={'История'}
                rightTitle={getSessionDate()}
                anotherIcon={'arrow_back_ios'}
                onButtonClick={() => props.history.push('/courier/main')}
            />
            <OrdersList
                deliveries={props.finishedDeliveries}
                deliveryPageId={props.deliveryPageId}
                onWatchDelivery={props.onWatchDelivery}
                use={'HistoryPage'}
            />
            <Footer balance={props.balance}/>
        </div>
    );
}   
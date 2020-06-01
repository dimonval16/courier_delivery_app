import React from "react";
import HeaderMain from "../../components/headers/HeaderMain";
import OrdersList from "../../components/orders_list/OrdersList";
import Footer from '../../components/footer/Footer';

export default function FinishPage(props) {
    const getSessionDate = () => {
        const finishData = props.lastSessionDate;
        const day = finishData.slice(8, 10);
        const month = finishData.slice(5, 7);
        const year = finishData.slice(2, 4);
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
            />
            <Footer balance={props.balance}/>
        </div>
    );
}   
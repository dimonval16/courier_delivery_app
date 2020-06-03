import React from 'react';
import HeaderMain from '../../components/headers/HeaderMain';
import OrdersList from '../../components/orders_list/OrdersList';
import Footer from '../../components/footer/Footer';
import CustomTab from '../../components/tabs/CustomTab';

export default function WorkPage(props) {
    const getSessionDate = () => {
        const finishData = new Date(props.sessionDate);
        const day = finishData.getDate();
        const month = `0${finishData.getMonth() + 1}`;
        const year = finishData.getFullYear();
        return `${day}.${month}.${year}`;
    }

    return (
        <div>
            <HeaderMain
                title={'Заказы'}
                rightTitle={getSessionDate()}
                anotherIcon={'arrow_back_ios'}
                onButtonClick={() => props.history.push('/courier/main')}
            />
            <CustomTab
                tab={props.tab}
                onSetTab={props.onSetTab}
            />
            <OrdersList
                deliveries={props.tab === 0 ? props.deliveries : props.activeDeliveries}
                deliveryPageId={props.deliveryPageId}
                onWatchDelivery={props.onWatchDelivery}
                use={'WorkPage'}
            />
            <Footer balance={props.balance}/>
        </div>
    );
}
import React, {useEffect} from 'react';
import HeaderMain from '../../components/headers/HeaderMain';
import OrdersList from '../../components/orders_list/OrdersList';
import Footer from '../../components/footer/Footer';
import CustomTab from '../../components/tabs/CustomTab';

export default function WorkPage(props) {
    const getSessionDate = data => {
        const finishData = new Date(data);
        const day = finishData.getDate();
        const month = `${finishData.getMonth() + 1}`;
        const year = finishData.getFullYear();
        return `${day}.${month}.${year}`;
    }

    useEffect(() => {
        props.onUpdateInfo(props.courierId);
        // eslint-disable-next-line react-hooks/exhaustive-deps,
    }, [])

    return (
        <div>
            <HeaderMain
                title={'Заказы'}
                rightTitle={getSessionDate(props.sessionDate)}
                anotherIcon={'arrow_back_ios'}
                onButtonClick={() => props.history.push('/courier/main')}
            />
            <CustomTab
                tab={props.tab}
                onSetTab={props.onSetTab}
                use={'WorkPage'}
            />
            <OrdersList
                deliveries={props.tab === 0 ?
                    props.deliveries : props.tab === 1 ?
                        props.activeDeliveries : props.finishedDeliveries}
                deliveryPageId={props.deliveryPageId}
                onWatchDelivery={props.onWatchDelivery}
                use={'WorkPage'}
            />
            <Footer balance={props.balance}/>
        </div>
    );
}
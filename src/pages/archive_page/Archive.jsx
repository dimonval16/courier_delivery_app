import React from 'react';
import HeaderMain from '../../components/headers/HeaderMain';
import CustomTab from '../../components/tabs/CustomTab';
import ArchiveContent from '../../components/archive_content/ArchiveContent';

export default function Archive(props) {
    return (
        <>
            <HeaderMain
                title={'Архив'}
                anotherIcon={'arrow_back_ios'}
                onButtonClick={() => props.history.push('/courier/main')}
            />
            <CustomTab
                tab={props.tab}
                onSetTab={props.onArchiveSetTab}
                use={'ArchivePage'}
            />
            <ArchiveContent
                sessions={props.tab === 0 ?
                    props.sessions.slice(0, 7) : props.sessions.slice(0, 14)
                }
                onWatchHistDeliveries={props.onWatchHistDeliveries}
            />
        </>
    );
}
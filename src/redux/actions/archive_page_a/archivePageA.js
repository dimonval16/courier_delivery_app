export const SET_ARCHIVE_TAB_STATUS = 'SET_ARCHIVE_TAB_STATUS';
export const SET_ARCHIVE_DELIVERIES = 'SET_ARCHIVE_DELIVERIES';

export const setArchiveDeliveriesAC = session => ({
   type: SET_ARCHIVE_DELIVERIES,
   session
})

export const setArchiveTabAC = newTab => ({
   type: SET_ARCHIVE_TAB_STATUS,
   newTab
});

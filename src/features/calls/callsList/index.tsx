import { useState, useEffect, createContext } from 'react';
import CountUp from 'react-countup';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import ProtectedLayout from 'src/components/layouts/protectedLayout';
import Navbar from 'src/components/navbar';
import Spinner from 'src/features/calls/callsList/components/spinner';
import { callTypes } from 'src/features/calls/callsList/types';
import { getCallsList, archiveCall } from 'src/features/calls/services';
import { objectToQueryParams } from 'src/utils/index';
import styled from 'styled-components';

import AllCalls from './components/allCalls';
import ArchivedCalls from './components/archivedCalls';
import UnarchivedCalls from './components/unarchivedCalls';

export const CallsListContext = createContext(
  (() => '') as React.Dispatch<React.SetStateAction<any>>
);

function CallsList() {
  const [calls, setCalls]: [any, any] = useState([]);
  const [pageNo, setPageNo] = useState(0);
  const [hasMoreCalls, setHasMoreCalls] = useState(false);
  const [totalCalls, setTotalCalls] = useState(null);
  const [callType, setCallType] = useState(callTypes.ALL_CALLS);
  const navigate = useNavigate();
  const getCallsData = () => {
    const params = objectToQueryParams({ offset: pageNo, limit: 5 });
    getCallsList(params).then((response: any) => {
      setCalls([...calls, ...response.nodes]);
      setPageNo(pageNo + 1);
      setHasMoreCalls(response.hasNextPage);
      setTotalCalls(response.totalCount);
    });
  };

  useEffect(() => {
    getCallsData();
  }, []);

  const viewCallDetails = (callId: string) => {
    navigate(callId);
  };
  const archiveUnarchiveCall = (callId: string) => {
    archiveCall(callId);
  };

  const callsComponentMap = {
    [callTypes.ALL_CALLS]: (
      <AllCalls
        callsObject={calls}
        onArchiveCall={archiveUnarchiveCall}
        onViewDetails={viewCallDetails}
      />
    ),
    [callTypes.ARCHIVED_CALLS]: (
      <ArchivedCalls
        callsObject={calls}
        onArchiveCall={archiveUnarchiveCall}
        onViewDetails={viewCallDetails}
      />
    ),
    [callTypes.UNARCHIVED_CALLS]: (
      <UnarchivedCalls
        callsObject={calls}
        onArchiveCall={archiveUnarchiveCall}
        onViewDetails={viewCallDetails}
      />
    ),
  };
  return (
    <CallsListContext.Provider value={setCallType}>
      <ProtectedLayout heading="Calls List">
        <Navbar></Navbar>
        <CallsListContainer>
          <div className="d-flex flex-row justify-content-center align-items-baseline">
            <h6>{'Counting Number of Calls : '}</h6>
            {totalCalls && <CountUp start={0} end={totalCalls ?? 0} duration={6} />}
          </div>
          {totalCalls && (
            <InfiniteScroll
              dataLength={(pageNo + 1) * 5}
              next={getCallsData}
              hasMore={hasMoreCalls}
              loader={<Spinner />}
              className={'no-overflow'}
            >
              {totalCalls && callsComponentMap[callType]}
            </InfiniteScroll>
          )}
        </CallsListContainer>
      </ProtectedLayout>
    </CallsListContext.Provider>
  );
}

export default CallsList;

const CallsListContainer = styled.div`
  .no-overflow {
    overflow: hidden !important;
  }
`;

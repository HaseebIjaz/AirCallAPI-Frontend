import React from 'react';
import CallCard from 'src/features/calls/callsList/components/callCard';

interface IArchivedCallsProps {
  callsObject: any;
  onViewDetails: (id: any) => void;
  onArchiveCall: (id: any) => void;
}

const ArchivedCalls: React.FC<IArchivedCallsProps> = ({
  callsObject,
  onViewDetails,
  onArchiveCall,
}) => {
  return (
    <div className="d-flex flex-row flex-wrap">
      {callsObject
        .filter((call: any) => call.is_archived === true)
        .map((call: any) => {
          return (
            <CallCard
              key={call.id}
              to={call.to}
              from={call.from}
              direction={call.direction}
              createdAt={call.created_at}
              isArchived={call.is_archived}
              onClickViewDetails={() => onViewDetails(call.id)}
              onClickArchiveCall={() => onArchiveCall(call.id)}
            />
          );
        })}
    </div>
  );
};

export default ArchivedCalls;

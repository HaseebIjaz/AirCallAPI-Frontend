import React from 'react';
import InboundCall from 'src/assets/img/inboundCall.png';
import OutboundCalls from 'src/assets/img/outboundCall.png';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ICallCardProps {
  from: string;
  to: string;
  direction: string;
  createdAt: string;
  isArchived: boolean;
  onClickViewDetails: () => void;
  onClickArchiveCall: () => void;
}
const CallCard: React.FC<ICallCardProps> = ({
  from,
  to,
  direction,
  createdAt,
  isArchived,
  onClickViewDetails,
  onClickArchiveCall,
}) => {
  return (
    <CallCardContainer className="card">
      <img
        className="card-img-top"
        src={direction === 'inbound' ? InboundCall : OutboundCalls}
        alt={'Call Icon here'}
      />
      <ul className="list-group list-group-flush">
        <li className="list-group-item"> {`From : ${from}`}</li>
        <li className="list-group-item">{`To: ${to}`}</li>
        <li className="list-group-item">{`Direction: ${direction}`}</li>
        <li className="list-group-item">{`Created At: ${createdAt}`}</li>
      </ul>
      <div className="card-body d-flex flex-row justify-content-between">
        <button className="btn btn-primary" onClick={onClickArchiveCall}>
          {isArchived ? 'UnArcchive' : 'Archive'}
        </button>
        <button className="btn btn-primary" onClick={onClickViewDetails}>
          View Details
        </button>
      </div>
    </CallCardContainer>
  );
};

export default CallCard;

const CallCardContainer = styled.div`
  max-width: 310px;
  margin: 20px 20px 20px 20px;
`;

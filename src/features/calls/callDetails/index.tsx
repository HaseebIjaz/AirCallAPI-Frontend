import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProtectedLayout from 'src/components/layouts/protectedLayout';
import { getCallData } from 'src/features/calls/services';
import styled from 'styled-components';

import { CallInfo, Note } from '../callsList/types';
const CallDetails: React.FC = () => {
  const { id } = useParams();
  const [callData, setcallData]: [CallInfo, any] = useState({});
  useEffect(() => {
    getCallData(id!).then((response) => {
      setcallData(response);
    });
  }, []);
  console.log(callData);
  return (
    <ProtectedLayout heading={'Call Details'}>
      <CallDetailsContainer>
        {callData && (
          <div className="card">
            <div className="card-header">{`Call Id : ${id}`}</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{`To : ${callData?.to}`}</li>
              <li className="list-group-item">{`Via : ${callData?.via}`}</li>
              <li className="list-group-item">{`From : ${callData?.from}`}</li>
              <li className="list-group-item">{`Duration : ${callData?.duration}`}</li>
              <li className="list-group-item">{`Call Type : ${callData?.call_type}`}</li>
              <li className="list-group-item">{`Created At : ${callData?.created_at}`}</li>
              <li className="list-group-item">{`Direction : ${callData?.direction}`}</li>
            </ul>
          </div>
        )}
        <div className="notes-collection">
          {callData.notes?.map((note: Note) => {
            return (
              <div className="card" key={id}>
                <div className="card-header">{`Note Id : ${note.id}`}</div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{`Content : ${note?.content}`}</li>
                </ul>
              </div>
            );
          })}
        </div>
      </CallDetailsContainer>
    </ProtectedLayout>
  );
};

export default CallDetails;

const CallDetailsContainer = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 33%;
  .notes-collection {
    display: flex;
    margin-top: 30px;
    flex-direction: column;
  }
`;

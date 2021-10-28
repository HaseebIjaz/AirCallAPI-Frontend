import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CallsListContext } from 'src/features/calls/callsList';
import { callTypes } from 'src/features/calls/callsList/types';
import styled from 'styled-components';

function Navbar() {
  const [callType, setCallType] = useState(callTypes.ALL_CALLS);
  const updatecallType = useContext(CallsListContext);
  const navigate = useNavigate();
  const redirectToLoginPage = () => {
    navigate('/login');
  };
  return (
    <StyledUnorderedList className="nav nav-pills mb-3" id="pills-tab" role="tablist">
      <li className="nav-item">
        <a
          className={`nav-link ${callType === callTypes.ALL_CALLS ? 'active' : ''}`}
          id="pills-home-tab"
          data-toggle="pill"
          href="#pills-home"
          role="tab"
          aria-controls="pills-home"
          aria-selected="true"
          onClick={() => {
            setCallType(callTypes.ALL_CALLS);
            updatecallType(callTypes.ALL_CALLS);
          }}
        >
          All Calls
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link ${callType === callTypes.ARCHIVED_CALLS ? 'active' : ''}`}
          id="pills-profile-tab"
          data-toggle="pill"
          href="#pills-profile"
          role="tab"
          aria-controls="pills-profile"
          aria-selected="false"
          onClick={() => {
            setCallType(callTypes.ARCHIVED_CALLS);
            updatecallType(callTypes.ARCHIVED_CALLS);
          }}
        >
          Archived Calls
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link ${callType === callTypes.UNARCHIVED_CALLS ? 'active' : ''}`}
          id="pills-contact-tab"
          data-toggle="pill"
          href="#pills-contact"
          role="tab"
          aria-controls="pills-contact"
          aria-selected="false"
          onClick={() => {
            setCallType(callTypes.UNARCHIVED_CALLS);
            updatecallType(callTypes.UNARCHIVED_CALLS);
          }}
        >
          UnArchived Calls
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link  'active' : ''}`}
          id="pills-contact-tab"
          data-toggle="pill"
          href="#pills-contact"
          role="tab"
          aria-controls="pills-contact"
          aria-selected="false"
          onClick={() => {
            redirectToLoginPage();
            // localStorage.removeItem('jwt');
            // localStorage.removeItem('refresh');
          }}
        >
          Logout
        </a>
      </li>
    </StyledUnorderedList>
  );
}

export default Navbar;

const StyledUnorderedList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;

  .nav-link.active {
    background-color: #33a867;
  }
  .nav-link {
    color: #33a867;
  }
`;

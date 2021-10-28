import styled from 'styled-components';

function Jumbotron() {
  return (
    <JumbotronContainer>
      <div className="jumbotron">
        <h1 className="display-4">Hello!</h1>
        <p className="lead">
          This is a implementation of a frontend test taken by Turing Technologies, Islamabad.
        </p>
        <p>
          Aim of the project is to make frontend for AirCall Api and provide UI support for the call
          data exposed by the same.
        </p>
        <p className="lead">
          <a
            className="btn btn-primary btn-lg"
            href={'https://github.com/turingtechPK/frontend-hiring-test-1'}
            role="button"
            target="_blank"
            rel="noreferrer noopener"
          >
            See more on it
          </a>
        </p>
      </div>
    </JumbotronContainer>
  );
}

export default Jumbotron;

const JumbotronContainer = styled.div`
  .btn-primary {
    background-color: #33a867;
    border-color: #33a867;
  }
`;

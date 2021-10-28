import styled from 'styled-components';

interface IProtectedLayoutProps {
  heading: string;
}
const ProtectedLayout: React.FC<IProtectedLayoutProps> = (props: any) => {
  return (
    <LayoutContainer>
      <h1 className="heading">{props.heading}</h1>
      {props.children}
    </LayoutContainer>
  );
};

export default ProtectedLayout;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  padding-right: 50px;
  .heading {
    margin-bottom: 30 px;
    margin-top: 30 px;
  }
`;

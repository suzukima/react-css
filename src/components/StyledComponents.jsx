import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <Container>
      <p>- Styled components -</p>
      <button>FIGHT!!</button>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  padding: 1.5rem;
  margin: 1rem;
  display: flex;
  justify-content: space-around;
`;

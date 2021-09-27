export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p>- Styled JSX -</p>
        <button>FIGHT!!</button>
      </div>
      <style jsx="true">{`
        .container {
          border: 1px solid #ddd;
          border-radius: 0.25rem;
          padding: 1.5rem;
          margin: 1rem;
          display: flex;
          justify-content: space-around;
        }
      `}</style>
    </>
  );
};

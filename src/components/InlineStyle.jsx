export const InlineStyle = () => {
  const containerStyle = {
    border: "1px solid #ddd",
    borderRadius: "0.25rem",
    padding: "1.5rem",
    margin: "1rem",
    display: "flex",
    justifyContent: "space-around"
  };
  const titleStyle = {
    margin: 0,
    color: "#3d84a8"
  };
  const buttonStyle = {
    padding: "0.5rem 1rem",
    backgroundColor: "#3d84a8",
    border: "1px solid#3d84a8",
    color: "#fff"
  };
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>- Inline Styles -</p>
      <button style={buttonStyle} type="button">
        FIGHT!!
      </button>
    </div>
  );
};

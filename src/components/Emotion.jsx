/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

export const Emotion = () => {
  const containerStyle = css`
    border: 1px solid #ddd;
    border-radius: 0.25rem;
    padding: 1.5rem;
    margin: 1rem;
    display: flex;
    justify-content: space-around;
  `;
  return (
    <div css={containerStyle}>
      <p>- Emotion -</p>
      <button>FIGHTS!!</button>
    </div>
  );
};

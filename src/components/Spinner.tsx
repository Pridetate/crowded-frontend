import React from "react";
import Container from "@material-ui/core/Container";

const LoadingSpinner = () => {
  return (
    <Container maxWidth="md">
      <div className="wait-container">
        <svg width="48px" height="48px" viewBox="0 0 128 128">
          <g>
            <linearGradient id="linear-gradient">
              <stop offset="0%" stop-color="#ffffff" />
              <stop offset="100%" stop-color="#22305f" />
            </linearGradient>
            <path
              d="M63.85 0A63.85 63.85 0 1 1 0 63.85 63.85 63.85 0 0 1 63.85 0zm.65 19.5a44 44 0 1 1-44 44 44 44 0 0 1 44-44z"
              fill="url(#linear-gradient)"
              fill-rule="evenodd"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 64 64"
              to="360 64 64"
              dur="1080ms"
              repeatCount="indefinite"
            ></animateTransform>
          </g>
        </svg>
      </div>
    </Container>
  );
};

export default LoadingSpinner;

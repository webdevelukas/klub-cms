import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const StyledImageOverlay = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background: hsla(3, 100%, 64%, 0.9);
  color: ${props => props.theme.highlightContrast};
  font-size: 1.2em;
  font-weight: 700;
  cursor: pointer;
`;

export default function ImageOverlay({ children, onClick }) {
  return <StyledImageOverlay onClick={onClick}>{children}</StyledImageOverlay>;
}

ImageOverlay.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node
};

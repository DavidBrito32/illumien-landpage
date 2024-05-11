import { ComponentProps } from "react";
import styled from "styled-components";

interface StyledProps {
  $w?: string;
  $h?: string;
  $largura?: string;
  $slide?: string;
}

export const Container = styled.div<StyledProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  @media only screen and (max-width: 500px) {
    height: fit-content;
  }
`;

export const Items = styled.div<StyledProps>`
  width: 100%;
  height: fit-content;
  transition-duration: 400ms;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  & video {
    width: 210px;
    height: 440px;
    &:hover {
      scale: 1.2;
      width: 260px;
      height: 440px;
      box-shadow: 1px 10px 30px black;
    }

    &:nth-child(2) {
      width: 265px !important;
      height: 500px;
      &:hover {
        width: 300px !important;
        height: 520px;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    overflow: scroll;
  }

  @media only screen and (min-width: 800px) {
    & video {
      &:nth-child(2) {
        width: 265px !important;
        height: 500px;
      }
    }
  }

  @media only screen and (min-width: 1500px) {
    video {
      width: 210px;
      height: 440px;
    }
  }
`;

export const Videos = styled.video<ComponentProps<"video"> & StyledProps>`
  object-fit: contain;
  transition-duration: 400ms;

  @media only screen and (max-width: 600px) {
    width: 100% !important;
    height: 60vh !important;

    &:hover {
      scale: 1 !important;
    }
  }

  @media only screen and (min-width: 500px) and (max-width: 960px) {
    width: 200px !important;
    height: 400px;
  }
`;

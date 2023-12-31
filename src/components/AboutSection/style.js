import styled from "styled-components";
import { theme } from "../theme";

export const AboutSectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 2%;

  h2 {
    font-family: Roboto Condensed;
    font-size: 32px;
    font-style: italic;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: center;
    text-transform: uppercase;
    z-index: 1;
    position: relative;
  }

  p {
    font-family: Barlow;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    color: ${theme.white};
    z-index: 2;
    width: 643px;
    height: 278px;
  }

  .BlackAbout {
    z-index: 1;
    bottom: 65%;
    left: 38%;
  }
`;

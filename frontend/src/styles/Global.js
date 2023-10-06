import styled, { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 /* Your global styles here */
`;

const Container = styled.div`
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.paddings.container};
`;

const Box = styled.div`
  margin-top: ${(props) => `calc(${props.mt} * 1px)`};
  ${(props) =>
    props.flxRight &&
    css`
      display: flex;
      justify-content: flex-end;
    `}
`;

const PageCenter = styled.div`
  background: ${(props) =>
    props.light ? props.theme.colors.background : props.theme.colors.themeGradient};
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  justify-content: ${(props) => (props.justifycenter ? 'center' : 'center')};

`;

const Flex = styled.div`
  display: flex;
  ${({ center }) =>
    center &&
    css`
      justify-content: center;
      align-items: center;
    `}
  ${({ spaceBetween }) =>
    spaceBetween &&
    css`
      justify-content: space-between;
      align-items: center;
    `}
  ${({ flxEnd }) =>
    flxEnd &&
    css`
      justify-content: flex-end;
      align-items: center;
    `}
  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap};
    `}
`;

const CenterCardContainer = styled.div`
  background: ${(props) => props.theme.colors.white};
  border-radius: 4px;
  min-width: 773px;
  min-height: 620px;
  padding: 50px 10px 60px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

const HighlightedText = styled.span`
  color: ${(props) => (props.color ? props.color : props.theme.colors.themeColor)};
`;

const ResizableBox = styled.div`
  width: ${(props) =>
    typeof props.width === 'string' ? props.width : `${props.width}px`};
`;

export { GlobalStyles, Container, Box, PageCenter, Flex, CenterCardContainer, HighlightedText, ResizableBox };

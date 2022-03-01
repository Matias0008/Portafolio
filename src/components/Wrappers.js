import styled from "styled-components";

export const SectionStyled = styled.section.attrs((props) => ({
  id: props.id,
  className: props.className,
}))`
  display: flex;
  align-items: center;
`;

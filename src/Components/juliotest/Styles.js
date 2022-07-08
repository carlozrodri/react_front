import { motion } from "framer-motion";
import styled from "styled-components";

export const Header = styled.header`
  background: blue;
  position: relative;
  right: 100;
  display: flex;
  padding: 1rem;
  justify-content: flex-end;
  z-index: 2;
`;

export const Nav = styled(motion.nav)`
  background-color: blue;
  height: 40vh;
  width: 30vw;
  position: fixed;
  top: 0;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Link = styled(motion.li)`
  color: white;
  margin-bottom: 1.6rem;
  font-size: 1.4rem;
`;

export const SvgBox = styled(motion.div)``;
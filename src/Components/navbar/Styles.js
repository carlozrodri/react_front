import { motion } from "framer-motion";
import styled from "styled-components";

export const Header = styled.header`
  background: #EEEDFF;
  position: relative;
  right: 100;
  display: flex;
  padding: 1rem;
  border-radius: 5rem;
  justify-content: flex-end;
  z-index: 2;
`;

export const Nav = styled(motion.nav)`
  height: 10vh;
  width: 100vw;
  background-color: #a3cdff;
  border-radius: 1rem;
  height: 15rem;
  width: 8rem;
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
`;

export const Link = styled(motion.li)`
  color: black;
  margin-bottom: 1.6rem;
  font-size: 1.4rem;
`;

export const SvgBox = styled(motion.div)``;
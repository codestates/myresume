import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: grid;
  place-items: center;
`;

export const ModalContainer = styled.div`
  height: 500px;
  text-align: center;
  margin: 120px auto;
`;

export const ModalView = styled.div.attrs((props) => ({
  role: "dialog",
}))`
  border-radius: 10px;
  background-color: white;
  padding: 20px;
  width: 500px;
  height: 500px;
`;

export const LoginSignupBtn = styled.button`
  height: 40px;
  width: 360px;
  background-color: blue;
  border-radius: 10px;
  text-align: center;
  line-height: 40px;
  color: white;
  cursor: pointer;
  margin: auto;
  border: none;
`;

export const Btn = styled.button`
  font-size: 20px;
  cursor: pointer;
  width: 180px;
  margin: auto;
  margin-top: 20px;
  height: 40px;
  color: black;
  background-color: white;
  border: none;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  justify-content: space-between;
`;

export const Input = styled.input`
  width: 360px;
  height: 40px;
  border-radius: 4px;
  background-color: rgba(238, 238, 238, 1);
  border: none;
`;

import React from "react";
import styled from "styled-components";

const CheckBoxContainer = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;

  input[type="checkbox"] {
    position: absolute;
    clip: rect(0, 0, 0, 0);
  }

  input[type="checkbox"]:checked + label::after {
    content: "";
    position: absolute;
    top: 15%;
    left: -30%;
    width: 1rem;
    height: 1rem;
    background-color: skyblue;
    border: 1px solid skyblue;
  }

  label {
    display: inline-block;
    position: relative;
    font-size: 1.5rem;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      top: 15%;
      left: -30%;
      width: 1rem;
      height: 1rem;
      background-color: white;
      border: 1px solid #ccc;
    }
  }
`;

function Checkbox({ checkAll, setCheckAll }) {
  return (
    <CheckBoxContainer>
      <input
        type="checkbox"
        id="customCheck"
        onChange={() => setCheckAll((prev) => !prev)}
        checked={checkAll ? true : false}
      />
      <label htmlFor="customCheck">
        <span>전부검색</span>
      </label>
    </CheckBoxContainer>
  );
}

export default Checkbox;

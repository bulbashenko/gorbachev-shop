import React from 'react';
import styled from "@emotion/styled";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
`

function Announcement(props) {
    return (
        <Container>
            Lorem ipsum dolor sit amet.
        </Container>
    );
}

export default Announcement;
import { useState } from "react";
import "./App.css"
import { Avatar, Wrap, WrapItem, AvatarBadge } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Wrap>
        <WrapItem>
          <Avatar name="Dan Abranmov" src="https://bit.ly/dan-abramov">
            <AvatarBadge boxSize="1.25em" bg="green.500"/>
          </Avatar>
        </WrapItem>
        <WrapItem>
          <Avatar name="Kola Tioluwani" src="https://bit.ly/tioluwani-kolawole"></Avatar>
        </WrapItem>
      </Wrap>

      <h1 className="text">Hello TypeScript</h1>
    </>
  )
}

export default App

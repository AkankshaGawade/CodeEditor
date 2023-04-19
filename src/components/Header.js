
import React from 'react'
import {AppBar,Toolbar,styled} from "@mui/material"

const Container=styled(AppBar)`
background:black;
`
export default function Header() {
  return (
    <Container position='static'>
        <Toolbar></Toolbar>
    </Container>
  )
}

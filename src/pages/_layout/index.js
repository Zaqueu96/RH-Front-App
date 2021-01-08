import React from 'react';
import {Container} from '@material-ui/core'
export default function Layout({children}){
    return <Container style={{margin:'0',padding:'0'}} maxWidth="false">
        {children}
    </Container> 
}
import styled from "styled-components";
import {useRef, useEffect} from 'react';

const Container = styled.div`

background-color : black;

width : 100vw;
height: 100vh;
`

const MouseFun = () => {

    const canvasRef= useRef(null);

    useEffect(() => {
        
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.fillstyle = '#0000'
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)
    }, [])

    const matrix = [
        [0,0,0,0,0],
        [0,0,1,0,0],
        [0,0,0,0,0],
    ];

    
    return(
        <Container>
            <canvas ref={canvasRef}>

            </canvas>
        </Container>
    )
}

export default MouseFun;
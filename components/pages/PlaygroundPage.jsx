import React, { useRef, useState, Suspense } from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import RotatingBox from '../RotatingBox';

const PlaygroundPage = () => {
    return (
        <CanvasContainer>
            <Canvas>
                {/* light.intensity = 0.1 */}
                <ambientLight intensity={0.1} />

                {/* light.position.set(0, 0, 5) */}
                {/* light.color.set('red') */}
                <directionalLight color="red" position={[0, 0, 5]} />

                <RotatingBox />
            </Canvas>
        </CanvasContainer>
    )
}

export default PlaygroundPage;

const CanvasContainer = styled.div`
    width: 100vw;
    height: 100vh;
`
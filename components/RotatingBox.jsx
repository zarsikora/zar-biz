import React, { useState } from "react";
import { useFrame } from "@react-three/fiber";

const RotatingBox = () => {
    const myMesh = React.useRef();
    const [active, setActive] = useState(false);

    useFrame(({ clock }) => {
        const a = clock.getElapsedTime();
        myMesh.current.rotation.x = a;
    });

    return (
        <mesh
            scale={active ? 1.5 : 1}
            onClick={() => setActive(!active)}
            ref={myMesh}
        >
            <boxBufferGeometry args={[2, 2, 2]} position={[0, 5, 5]} />
            <meshNormalMaterial />
        </mesh>
    );
}

export default RotatingBox;
import React from 'react'
import Particles from "react-tsparticles";
import particleConfig from '../config/particleConfig';

function ParticlesLoader() {
    return (
        <div>
            <Particles
                id="tsparticles"
                options={particleConfig}
            />
        </div>
    )
}

export default ParticlesLoader
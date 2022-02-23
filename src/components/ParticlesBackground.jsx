import Particles from 'react-tsparticles';

function ParticlesBackground() {
    return (
        <div>
            <Particles
                options={{
                    background: {
                        color: 'black',
                    },
                    fullScreen: {
                        enable: true,
                    },
                    fpsLimit: 60,
                    interactivity: {
                        detectsOn: 'canvas',
                        events: {
                            resize: true,
                        },
                    },
                    particles: {
                        color: {
                            value: '#FFFFFF'
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 1080
                            },
                            limit: 0,
                            value: 400,
                        },
                        opacity: {
                            animation: {
                                enable: true,
                                minimumValue: 0.5,
                                speed: 1,
                                sync: false
                            },
                            random: {
                                enable: true,
                                minimumValue: 1,
                            }, value: 1
                        },
                        shape: {
                            type: 'circle',
                        },
                        size: {
                            random: {
                                enable: true,
                                minimumValue: 2,
                            },
                            value: 1
                        }
                    }
                }} />
        </div>
    );
};

export default ParticlesBackground;
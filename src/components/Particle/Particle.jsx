import Particles from 'react-particles-js';

const Particle = () => {
  return (
    <Particles
      width="100%"
      height="100vh"
      params={{
        fps_limit: 28,
        particles: {
          collisions: {
            enable: false
          },
          number: {
            value: 120,
            density: {
              enable: false,
              value_area: 2
            }
          },
          line_linked: {
            enable: true,
            distance: 30,
            opacity: 0.4
          },
          move: {
            speed: 0.2
          },
          opacity: {
            anim: {
              enable: true,
              opacity_min: 0.05,
              speed: 1,
              sync: false
            },
            value: 0.4
          }
        },
        polygon: {
          enable: true,
          scale: 0.8,
          type: 'inline',
          move: {
            radius: 15
          },
          url: './assets/img/small-deer.svg',
          inline: {
            arrangement: 'equidistant'
          },
          draw: {
            enable: true,
            stroke: {
              color: 'rgba(255, 255, 255, .2)'
            }
          }
        },
        retina_detect: false,
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: 'bubble'
            }
          },
          modes: {
            bubble: {
              size: 6,
              distance: 40
            }
          }
        }
      }}
    />
  );
};

export default Particle;

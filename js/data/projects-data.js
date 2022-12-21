/*=================================================================
  The Project and Project Modal Elements just share the same data
=================================================================*/

const paraject = {
    name: "Paraject",
    label: "RGB with Potentiometer",
    description:
      "A RGB Led control with 3 potentiometers to produce different color.",
    logo: "../../images/projects/demo/Picture1.png",
    demoImage: "../../images/projects/demo/Picture1.png",
    demoImageAlt: "RGB with Potentiometer",
  };

  const pwm = {
    name: "Analog vs PWM",
    label: "Analog vs PWM",
    description:
      "The difference between a PWM to an Analog using STM32 Microcontroller.",
    logo: "../../images/projects/demo/pwm.jpg",
    demoImage: "../../images/projects/demo/pwm.jpg",
    demoImageAlt: "Analog vs PWM",
  };
  
  const traffic = {
    name: "Traffic Light",
    label: "Traffic Light",
    description:
      "A traffic light simulation using STM32 Microcontroller.",
    logo: "../../images/projects/demo/traffic.png",
    demoImage: "../../images/projects/demo/traffic.png",
    demoImageAlt: "Traffic Light",
  };

  export const projects = [
    paraject,
    pwm,
    traffic,
  ];
  
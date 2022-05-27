const particleConfig = {
        "background": {
        "color": {
            "value": "#000000"
        },
        "image": "url('./gradientBg.webp')",
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "cover"
        },
        "backgroundMask": {
        "cover": {
            "color": {
            "value": {
                "r": 30,
                "g": 30,
                "b": 40
            }
            }
        },
        "enable": true
        },
        "fullScreen": {
        "zIndex": -1
        },
        "fpsLimit": 60,
        "interactivity": {
        "events": {
            "onClick": {
            "mode": "push"
            },
            "onHover": {
            "mode": "bubble",
            "parallax": {
                "force": 60
            }
            }
        },
        "modes": {
            "bubble": {
            "distance": 400,
            "duration": 2,
            "opacity": 1,
            "size": 100
            },
            "grab": {
            "distance": 400
            }
        }
        },
        "particles": {
        "color": {
            "value": "#ffffff"
        },
        "links": {
            "color": {
            "value": "#ffffff"
            },
            "distance": 150,
            "enable": true
        },
        "move": {
            "attract": {
            "rotate": {
                "x": 600,
                "y": 1200
            }
            },
            "enable": true,
            "path": {},
            "outModes": {
            "bottom": "out",
            "left": "out",
            "right": "out",
            "top": "out"
            },
            "spin": {}
        },
        "number": {
            "density": {
            "enable": true
            },
            "value": 80
        },
        "opacity": {
            "animation": {
            "speed": 1,
            "minimumValue": 0.1
            }
        },
        "size": {
            "random": {
            "enable": true
            },
            "value": {
            "min": 1,
            "max": 5
            },
            "animation": {
            "speed": 40,
            "minimumValue": 0.1
            }
        }
    }
}

export default particleConfig;
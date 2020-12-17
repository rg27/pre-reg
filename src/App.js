import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Particles from 'react-particles-js';
// import xmas1 from './images/xmas1.png'
// import xmas2 from './images/xmas2.png'
// import xmas3 from './images/xmas3.png'
// import xmas5 from './images/xmas5.png'
// import xmas6 from './images/xmas6.png'

function App() {
  return (
    <body class="leading-normal tracking-normal text-indigo-400 m-6 bg-cover bg-fixed" className="backImage">
      <div class="h-full">
{/*         
<Particles
 style={{ position: "absolute" }}
 height="95%"
 width="95%"
    params={{
	    "particles": {
	        "number": {
	            "value": 40,
	            "density": {
	                "enable": true,
	                "value_area": 800
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "speed": 2,
	            "out_mode": "out"
	        },
	        "shape": {
	            "type": [
	                "image",
	            ],
	            "image": [
	                {
	                    "src": xmas1,
	                    "height": 20,
	                    "width": 23
                  },
                
	                {
	                    "src": xmas2,
	                    "height": 20,
	                    "width": 20
	                },
	                {
	                    "src": xmas3,
	                    "height": 20,
	                    "width": 20
                    },
                    {
	                    "src": xmas5,
	                    "height": 20,
	                    "width": 20
                    },
                    {
	                    "src": xmas6,
	                    "height": 20,
	                    "width": 20
	                }
	            ]
	        },
	        "color": {
	            "value": "#CCC"
	        },
	        "size": {
	            "value": 40,
	            "random": false,
	            "anim": {
	                "enable": true,
	                "speed": 5,
	                "size_min": 20,
	                "sync": false
	            }
	        }
	    },
	    "retina_detect": false
	}} /> */}
          <Header/>
          <Main/>
      </div>
    </body>
  );
}

export default App;

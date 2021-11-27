import React, { Component } from 'react'
import a1 from '../../resource/f.png'
import a2 from '../../resource/g.png'
import a3 from '../../resource/h.png'
import a4 from '../../resource/i.png'
import a5 from '../../resource/j.png'
import a6 from '../../resource/k.png'
import a7 from '../../resource/m.png'
import a8 from '../../resource/n.png'
import a9 from '../../resource/v.png'
import b1 from '../../resource/x.png'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './cards.css'

class Cards extends Component {
	constructor(props) {
		super(props)
	}
	render() {

        const responsive = {
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 5,
              
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
              
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
              
            }
          };

		return (
			<div className="corouselCards" >
				<div style={{ padding : '20px', paddingTop : '70px'}}>
                    <Carousel show={5} slide={5} swiping={false} responsive={responsive} >
                        <img src={a1} />
                        <img src={a2} />
                        <img src={a3} />
                        <img src={a4} />
                        <img src={a5} />
                    </Carousel>
                </div>
                <div style={{ padding : '20px'}}>
                    <Carousel show={5} slide={5} swiping={false} responsive={responsive} >
                        <img src={a6} />
                        <img src={a7} />
                        <img src={a8} />
                        <img src={a9} />
                        <img src={b1} />
                    </Carousel>
                </div>
			</div>
		)

	}
}
export default Cards
import React, { Component } from 'react'
import Carousel from '../../component/carousel/carousel'
import './home.scss'
import bookhome from '../../resource/bookHome1.png'
import Cardview from '../../component/cards/cards'
class Home extends Component {
	constructor(props) {
		super(props)
	}
	render() {

		return (
			<div className="home" style={{ height: "1600px"}}>
				<div>
					<img  style={{width:'100%', height: "350px"}} src={bookhome} />
				</div>
				<div style={{ height : '500px', marginTop :'-140px', backgroundColor : 'rgb(243 217 88)'}}>
					<Carousel />
				</div>
				<div style={{ height : '100px'}}>
					<Cardview />
				</div>	

			</div>
		)

	}
}
export default Home
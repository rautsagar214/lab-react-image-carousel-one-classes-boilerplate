import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"; 

// implement the class below
class Carousel extends Component {

    constructor(){
        super()
        this.state = {index : 0}
    }

    render(){
        let handlePrev = () =>{
            if (this.state.index == 0){
                this.setState({index:2})
            }else{
                this.setState({index:(this.state.index-1)})
            }
        }
        let handleNext = () =>{
            if (this.state.index == 2){
                this.setState({index:0})
            }else{
                this.setState({index:(this.state.index+1)})
            }
        }

        return (
            <>
                <div className="main-container">
                    <div className="arrows">
                        <ArrowBackIosIcon onClick={handlePrev}/>
                    </div>

                    <div className="image-box">
                        <img src={images[this.state.index].img} className="img"/>
                    </div>      

                    <div className="image-container">
                        <div className="title-box box">
                            {images[this.state.index].title}
                        </div>
                        <div className="subtitle-box box">
                            {images[this.state.index].subtitle}
                        </div>
                    </div>

                    <div className="arrows">
                        <ArrowForwardIosIcon onClick={handleNext}/>
                    </div>
                </div>
            </>
        )
    }

}

export default Carousel;
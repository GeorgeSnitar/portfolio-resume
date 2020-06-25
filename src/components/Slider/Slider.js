import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import recipeImg from '../../assets/ReactRecipe.png';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100" 
                    src={recipeImg}
                    alt="Recipe" />
                <Carousel.Caption>
                     <h3>Recipe</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={recipeImg}
                    alt="Recipe" />
                <Carousel.Caption>
                     <h3>Recipe</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;

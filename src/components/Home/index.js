import React from 'react'
import "./index.css"

import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import carouselOneImg from "../../assets/carousel-1.png"
import carouselTwoImg from "../../assets/carousel-2.png"
import carouselThreeImg from "../../assets/carousel-3.png"
import productCom1 from "../../assets/product-com-1.png"
import productCom2 from "../../assets/product-com-2.png"
import productCom3 from "../../assets/product-com-3.png"
import productCom4 from "../../assets/product-com-4.png"
import productCom5 from "../../assets/product-com-5.png"
import productCom6 from "../../assets/product-com-6.png"

import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Home = ({isLoggedin})=>{
    const navigate = useNavigate()
    return(
        <div className='home-container'>
            <Carousel>
                <Carousel.Item>
                    <Row>
                        <Col className='home-content-wrapper'>
                            <div className='content-con'>
                                <h1>SHOP WITH UTMOST <br/><span className='style-text'>STYLE</span></h1>
                                <p>Shop from the latest trendy clothes to the best gadgets. With star shopper you save 10% every time you shop!</p>
                                <Button className='browse-btn'
                                 style={{padding: "0.5rem 4rem",backgroundColor:'rgb(33,106,217)'}}
                                 onClick={()=>{
                                    if(isLoggedin){
                                        navigate("/products")
                                    }else{
                                        navigate("/login")
                                    }
                                 }}
                                 >Browse Products</Button>
                                <p>Products available from :</p>
                                <div className='product-com-wrapper'>
                                    <img src={productCom1} className='product-company-logo' alt='product-company'/>
                                    <img src={productCom2} className='product-company-logo' alt='product-company'/>
                                    <img src={productCom3} className='product-company-logo' alt='product-company'/>
                                    <img src={productCom4} className='product-company-logo' alt='product-company'/>
                                    <img src={productCom5} className='product-company-logo' alt='product-company'/>
                                    <img src={productCom6} className='product-company-logo' alt='product-company'/>
                                </div>
                            </div>
                        </Col>
                        <Col className='home-img-wrapper'>
                            <img src={carouselOneImg} alt='carousel-1' className='carousel-img'/>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col className='home-content-wrapper'>
                            <div className='content-con'>
                                <h1>SHOP WITH UTMOST <br/><span className='style-text'>STYLE</span></h1>
                                <p>Shop from the latest trendy clothes to the best gadgets. With star shopper you save 10% every time you shop!</p>
                                <Button className='browse-btn'
                                 style={{padding: "0.5rem 4rem",backgroundColor:'rgb(33,106,217)'}}
                                 onClick={()=>{
                                    if(isLoggedin){
                                        navigate("/products")
                                    }else{
                                        navigate("/login")
                                    }
                                 }}
                                 >Browse Products</Button>
                                <p>Products available from :</p>
                                <div className='product-com-wrapper'>
                                    <img src={productCom1} className='product-company-logo' alt='product-company'/>
                                    <img src={productCom2} className='product-company-logo' alt='product-company'/>
                                    <img src={productCom3} className='product-company-logo' alt='product-company'/>
                                    <img src={productCom4} className='product-company-logo' alt='product-company'/>
                                    <img src={productCom5} className='product-company-logo' alt='product-company'/>
                                    <img src={productCom6} className='product-company-logo' alt='product-company'/>
                                </div>
                            </div>
                        </Col>
                        <Col className='home-img-wrapper'>
                            <img src={carouselTwoImg} alt='carousel-2' className='carousel-img'/>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col className='home-content-wrapper'>
                            <div className='content-con'>
                                <h1>SHOP WITH UTMOST <br/><span className='style-text'>STYLE</span></h1>
                                <p>Shop from the latest trendy clothes to the best gadgets. With star shopper you save 10% every time you shop!</p>
                                <Button className='browse-btn'
                                 style={{padding: "0.5rem 4rem",backgroundColor:'rgb(33,106,217)'}}
                                 onClick={()=>{
                                    if(isLoggedin){
                                        navigate("/products")
                                    }else{
                                        navigate("/login")
                                    }
                                 }}
                                 >Browse Products</Button>
                                <p>Products available from :</p>
                                <div className='product-com-wrapper'>
                                    <img src={productCom1} className='product-company-logo' alt='product-company'/>
                                    <img src={productCom2} className='product-company-logo' alt='product-company'/>
                                    <img src={productCom3} className='product-company-logo' alt='product-company'/>
                                    <img src={productCom4} className='product-company-logo' alt='product-company'/>
                                    <img src={productCom5} className='product-company-logo' alt='product-company'/>
                                    <img src={productCom6} className='product-company-logo' alt='product-company'/>
                                </div>
                            </div>
                        </Col>
                        <Col className='home-img-wrapper'>
                            <img src={carouselThreeImg} alt='carousel-3' className='carousel-img'/>
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Home
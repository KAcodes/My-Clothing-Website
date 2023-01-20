import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome.jsx'; 
import LandingPage from './MainContent';
import Product from './Products';

import myLogo from './mylogo.jpg';
import spadesters from './spadesters.jpg'
import leather from './leatherpants.jpg'
import spadeBag from './spadebag.jpg'
import jacket from './jacket.jpeg'

import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from 'react-bootstrap';


function App() {

  const products = [
    ["Spadesters", spadesters, "What is so special about Spadesters? It's the fine attention to detail that enhances the quality of Spadesters. The attention to detail found in Spadesters's  are legendary. Designed to stand out, it's the unique details that draw attention to these signature shoes. This careful attention to detail comes through in quality craftsmanship.", 750],
    ["Leather Pants", leather, "Spade shapes these trousers to a close-fitting silhouette that’s been the house’s signature for a decade – first introduced by Kayode Apena in 2012. Italian crafted from leather with a glossy finish, they’re accented with denim-inspired hardware at the slip pockets, then finished with a yoke at the back for a flattering fit. Accentuate the slim-leg profile by underscoring with streamlined boots.", 430],
    ["The Spade Bag" , spadeBag, "The Spade is available in a rare heritage leather with unique character. Entirely vegetable-tanned natural cowhide has an exceptionally transparent finish that gains a patina and becomes even more beautiful over time. Smooth or grained, this leather in a natural shade emphasizes The Spade’s clean lines and will appeal to connoisseurs.", 1675],
    ["The Chillbreaker", jacket, "This hip-length parka pairs great warmth with stylized features including a quilt-through design and a curved hemline. The Chillbreaker provides fundamental protection regardless of the weather. Chin guard is lined with tricot fabric for softness and comfort. Recessed rib-knit cuffs add comfort and lock in heat. Hem is longer in the back for added coverage and protection. Placket with snap closures over 2-way zipper keeps the elements out. Unzip from the bottom for added range of motion or venting. 2 exterior pockets: fleece-lined handwarmer pockets with zipper closures. 1 interior pocket: security pocket with zipper closure.", 1100]
  ]

  const displayProducts = products.map(item => {
    return <Col md={6} className="text-center "> 
      <Product name={item[0]} imgSource={item[1]} description={item[2]} price={item[3]}/>
    </Col>
  })
  
  
  return (
 
     <Container fluid px-9>
    <div className="App">
     
      <Row>
        <Col sm={3}><img src={myLogo} className="myLogo img-responsive" alt="logo" /></Col>
        <Col sm={9} className="text-center"><Welcome isLoggedOn= {true} name="Kayode" /></Col>
      </Row>
      <div className="Header"></div>
      <br></br>
      <Row className="text-center"><Col><LandingPage/> </Col></Row>
      <Row>
        {displayProducts}
      </Row>
    </div>
  </Container> 

  );
}

export default App;

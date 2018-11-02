import React ,{ Component } from 'react';
import Footer from './Footer';
import Carousel from '../Components/Carousel';
class Home extends Component{
    render(){
        return(
        <div>
            <div>
        <Carousel/>
            </div>

        <Footer/>
          
          </div>
          );
    }
} export default Home;


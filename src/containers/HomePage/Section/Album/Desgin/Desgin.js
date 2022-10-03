import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Helmet} from "react-helmet";
import Navbar from '../../../Header/Navbar';
import Album from '../Album';
import ListDesgin from './listDesgin';
import Footer from '../../../Header/Footer';
import '../../Album/Hatay.scss';
class DetailBlog extends Component {
    render() {
        return (
          <> 
          <Helmet>
                <title>Album ảnh | Desgin</title>
                <meta 
                name="description" 
                content="Mấy cái thiết kế linh tinh thôi, chả có gì đâu" />
          </Helmet>
        <Navbar />
        <Album />
        <div className='ha-tay'>
         <h1>Desgin</h1>
        </div>
        <ListDesgin />
        <Footer />

          </>
             
        );
}
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailBlog);

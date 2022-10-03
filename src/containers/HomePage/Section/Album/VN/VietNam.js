import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../../../Header/Navbar';
import Album from '../Album';
import ListVN from './listVN';
import Footer from '../../../Header/Footer';
import {Helmet} from "react-helmet";
import '../../Album/Hatay.scss';
class DetailBlog extends Component {
    render() {
        return (
          <> 
            <Helmet>
                <title>Album ảnh | Việt Nam quê hương tôi </title>
                <meta 
                name="description" 
                content="Quê hương Việt Nam của tôi" />
                 </Helmet>
        <Navbar />
        <Album />
        <div className='ha-tay'>
         <h1> Việt Nam quê hương tôi </h1>
        </div>
        <ListVN />
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

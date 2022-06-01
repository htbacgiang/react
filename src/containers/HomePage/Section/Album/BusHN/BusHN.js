import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Helmet} from "react-helmet";
import Navbar from '../../../Header/Navbar';
import Album from '../Album';
import ListBus from './listBus';
import Footer from '../../../Header/Footer';

import '../../Album/Hatay.scss';
class DetailBlog extends Component {
    render() {
        return (
          <> 
          <Helmet>
                <title>Album ảnh | Xe bus Hà Nội</title>
                <meta 
                name="description" 
                content="Những hình ảnh xe bus đẹp nhất Hà Nội tại đây" />
          </Helmet>
        <Navbar />
        <Album />
        <div className='ha-tay'>
         <h1> Xe Bus Hà Nội</h1>
        </div>
        <ListBus />
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

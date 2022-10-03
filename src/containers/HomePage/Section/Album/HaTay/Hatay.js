import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Helmet} from "react-helmet";
import Navbar from '../../../Header/Navbar';
import Album from '../Album';
import ListHT from './ListHT';
import Footer from '../../../Header/Footer';
import '../../Album/Hatay.scss';
class DetailBlog extends Component {
    render() {
        return (
          <> 
          <Helmet>
                <title>Album ảnh | Hà Tây quê lụa</title>
                <meta 
                name="description" 
                content="Nhứng hình ảnh đẹp nhất về quê hương Hà Tây mà tôi thực hiện trong suốt 6 năm" />
          </Helmet>
        <Navbar />
        <Album />
        <div className='ha-tay'>
         <h1> Hà Tây quê lụa</h1>
        </div>
        <ListHT />
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

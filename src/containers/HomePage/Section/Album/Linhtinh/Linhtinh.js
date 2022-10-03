import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Helmet} from "react-helmet";
import Navbar from '../../../Header/Navbar';
import Album from '../Album';
import Footer from '../../../Header/Footer';
import ListLinhtinh from './listLinhtinh';
import '../../Album/Hatay.scss';

class DetailBlog extends Component {
    render() {
        return (
          <> 
          <Helmet>
                <title>Album ảnh | Có vài thứ cực đáng yêu</title>
                <meta 
                name="description" 
                content="Chỗ này toàn ảnh linh tinh thôi" />
          </Helmet>
        <Navbar />
        <Album />
        <div className='ha-tay'>
         <h1> Có vài thứ cực đáng yêu </h1>
        </div>
        <ListLinhtinh />
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

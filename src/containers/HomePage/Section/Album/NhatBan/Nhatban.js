import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Helmet} from "react-helmet";
import Navbar from '../../../Header/Navbar';
import Album from '../Album';
import ListNB from './ListNB';
import '../../Album/Hatay.scss';
class DetailBlog extends Component {
    render() {
        return (
          <> 
          <Helmet>
                <title>Album ảnh | Nhật Bản đến và yêu</title>
                <meta 
                name="description" 
                content="Album Nhật Bản đến và yêu bao gồm những hình ảnh đẹp nhất mà tôi chụp khi sinh sống và học tập, làm việc tại đất nước mặt trời mọc" />
          </Helmet>
        <Navbar />
        <Album />
        <div className='ha-tay'>
         <h1> Nhật Bản đến và yêu </h1>
        </div>
        <ListNB />
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

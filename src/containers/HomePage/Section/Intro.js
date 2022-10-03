import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Header/Navbar';
import './Intro.scss';
import Img1 from './../../../assets/illustrations/hero-header.png'
import Img2 from './../../../assets/illustrations/about.png'

class Banner extends Component {

    componentDidMount(){
            
    
      }

    render() {
        
        return (
            <React.Fragment>
                 <Navbar/>
                 <section class="py-5">

                <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-5 col-lg-7 order-md-1 pt-8"><img class="img-fluid" src={Img1} alt="" /></div>
                    <div class="col-md-7 col-lg-5 text-md-start pt-5 pt-md-9">
                    <h2 class="mb-4 display-2 fw-bold">Tôi là ai <br class="d-block d-lg-none d-xl-block" />Trường NQ.</h2>
                    <p class="mt-3 mb-4">Data Warehouse is a data storage area that <br />has been tested for security, so you can store<br />your data here safely but not be afraid of <br />being stolen by others.</p>
                    </div>
                </div>
                </div>
                </section>

                  <section class="py-4">
                <div class="container">
                <div class="row">
                    <div class="col-12">
                    <div class="card mb-3 bg-soft-danger rounded-3">
                        <div class="row g-0 align-items-center">
                        <div class="col-md-5 col-lg-6 text-md-center"><img class="img-fluid" src={Img2} alt="" /></div>
                        <div class="col-md-7 col-lg-6 px-md-2 px-xl-6 text-center text-md-start">
                            <div class="card-body px-4 py-5 p-lg-3 p-md-4">
                            <h1 class="mb-4 fw-bold">We are a high-level data<br class="d-md-none d-xxl-block" />storage bank</h1>
                            <p class="card-text">The place to store various data that you can access at any<br class="d-none d-xxl-block" />time through the internet and where you can carry it. <br class="d-none d-xxl-block" />This very flexible storage area has a high level of security.<br class="d-none d-xxl-block" />To enter into your own data you must enter the password<br class="d-none d-xxl-block" />that you created when you registered in this Data <br class="d-none d-xxl-block" />Warehouse. </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        <section>
        <div class="container-fluid py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5">
            <img
              class="img-fluid rounded mb-5 mb-lg-0"
              src={Img2}
              alt=""
            />
          </div>
          <div class="col-lg-7">
            <p class="section-title pr-5">
              <span class="pr-2">Learn About Us</span>
            </p>
            <h1 class="mb-4">Best School For Your Kids</h1>
            <p>
              Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
              dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
              Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
              dolor
            </p>
            <div class="row pt-2 pb-4">
              <div class="col-6 col-md-4">
                <img class="img-fluid rounded" src="img/about-2.jpg" alt="" />
              </div>
              <div class="col-6 col-md-8">
                <ul class="list-inline m-0">
                  <li class="py-2 border-top border-bottom">
                    <i class="fa fa-check text-primary mr-3"></i>Labore eos amet
                    dolor amet diam
                  </li>
                  <li class="py-2 border-bottom">
                    <i class="fa fa-check text-primary mr-3"></i>Etsea et sit
                    dolor amet ipsum
                  </li>
                  <li class="py-2 border-bottom">
                    <i class="fa fa-check text-primary mr-3"></i>Diam dolor diam
                    elitripsum vero.
                  </li>
                </ul>
              </div>
            </div>
            <a href="" class="btn btn-primary mt-2 py-2 px-4">Learn More</a>
          </div>
        </div>
      </div>
    </div>
        </section>
        <section>
            
        </section>
           

            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
import React from 'react'

// BACK
import '../../assets/back/vendors/feather/feather.css'
import '../../assets/back/vendors/mdi/css/materialdesignicons.min.css'
import '../../assets/back/vendors/ti-icons/css/themify-icons.css'
import '../../assets/back/vendors/typicons/typicons.css'
import '../../assets/back/vendors/simple-line-icons/css/simple-line-icons.css'
import '../../assets/back/vendors/css/vendor.bundle.base.css'
import '../../assets/back/css/vertical-layout-light/style.css'

const Masuk = () => {

    return (
        <>
            <div class="container-scroller">
                <div class="container-fluid page-body-wrapper full-page-wrapper">
                    <div class="content-wrapper d-flex align-items-center auth px-0">
                        <div class="row w-100 mx-0">
                            <div class="col-lg-4 mx-auto">
                                <div class="auth-form-light text-left py-5 px-4 px-sm-5">
                                    <h4 style={{textAlign: 'center'}}>Masuk untuk memulai menulis</h4>
                                    <h6 style={{textAlign: 'center'}} class="fw-light">Masukan username dan password.</h6>
                                    <form class="pt-3">
                                        <div class="form-group">
                                            <input type="text" class="form-control form-control-lg" placeholder="Username" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control form-control-lg" placeholder="Password" />
                                        </div>
                                        <div class="mt-3">
                                            <button class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">Masuk</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Masuk;
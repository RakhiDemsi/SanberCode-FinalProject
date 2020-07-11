import React from 'react'

export default ({ services }) => {
    return (
        <section className="page-section" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Services</h2>
                        <h3 className="section-subheading text-muted">Kami Melayani Jasa Pembuatan Website</h3>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="service-heading">Transaksi yang Mudah</h4>
                        <p className="text-muted">Dapat melakukan transaksi kapanpun, dimanapun</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="service-heading">Design Yang Berkualitas</h4>
                        <p className="text-muted">Melayani Design Website yang berkualitas sesuai permintaan client</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="service-heading">Security Web yang Bermutu</h4>
                        <p className="text-muted">Menjamin website anda dengan security agar tidak direntas</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
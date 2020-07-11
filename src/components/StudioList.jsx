import React from 'react'
import useSignUpForm from './CustomHooks';

export default ({ studiolist }) => {
    const signup = () => {
        alert(
            `Anda Mengirim :
         Nama: ${inputs.nama}
         Alamat: ${inputs.alamat}
         Tempat Tanggal Lahir: ${inputs.ttl}
         Skill: ${inputs.skill}
         Email: ${inputs.email}
         Phone: ${inputs.phone}`
        );
    }
    const { inputs, handleInputChange, handleSubmit } = useSignUpForm(signup);
    return (
        <section className="page-section" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Join Us</h2>
                        <h3 className="section-subheading text-muted">Gabung dengan studio kami, membantu banyak orang untuk membuat websitenya</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <form onSubmit={handleSubmit} id="contactForm" name="sentMessage" noValidate="novalidate">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input className="form-control" name="nama" type="text" placeholder="Nama Lengkap" required="required" onChange={handleInputChange} value={inputs.nama} />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" name="alamat" type="text" placeholder="Alamat" required="required" onChange={handleInputChange} value={inputs.alamat} />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" name="ttl" type="text" placeholder="Tempat Tanggal Lahir" required="required" onChange={handleInputChange} value={inputs.ttl} />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input className="form-control" name="skill" type="text" placeholder="Skill" required="required" onChange={handleInputChange} value={inputs.skill} />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" name="email" type="email" placeholder="Email" required="required" onChange={handleInputChange} value={inputs.email} />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" name="phone" type="tel" placeholder="Nomor Telpon" required="required" onChange={handleInputChange} value={inputs.phone} />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="col-lg-12 text-center">
                                    <div id="success"></div>
                                    <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Kirim</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="my">
                <footer className="text-white text-center text-lg-start" style={{ backgroundColor: '#23242a' }}>
                    <div className="container p-4">
                        <div className="row mt-4">
                            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                                <h5 className="text-uppercase mb-4">About company</h5>
                                <p>
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                    voluptatum deleniti atque corrupti.
                                </p>
                                <p>
                                    Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                                    molestias.
                                </p>

                            </div>
                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase mb-4 pb-1">Search something</h5>
                                <div className="form-outline form-white mb-4">
                                    <input type="text" id="formControlLg" className="form-control form-control-lg" />
                                    <label className="form-label" htmlFor="formControlLg" style={{ marginLeft: 0 }}>Search</label>
                                    <div className="form-notch"><div className="form-notch-leading" style={{ width: 9 }} /><div className="form-notch-middle" style={{ width: '48.8px' }} /><div className="form-notch-trailing" /></div></div>
                                <ul className="fa-ul" style={{ marginLeft: '1.65em' }}>
                                    <li className="mb-3">
                                        <span className="fa-li"><i className="fas fa-home" /></span><span className="ms-2">New York, NY 10012, US</span>
                                    </li>
                                    <li className="mb-3">
                                        <span className="fa-li"><i className="fas fa-envelope" /></span><span className="ms-2">info@example.com</span>
                                    </li>
                                    <li className="mb-3">
                                        <span className="fa-li"><i className="fas fa-phone" /></span><span className="ms-2">+ 01 234 567 88</span>
                                    </li>
                                    <li className="mb-3">
                                        <span className="fa-li"><i className="fas fa-print" /></span><span className="ms-2">+ 01 234 567 89</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase mb-4">Opening hours</h5>
                                <table className="table text-center text-white">
                                    <tbody className="font-weight-normal">
                                        <tr>
                                            <td>Mon - Thu:</td>
                                            <td>8am - 9pm</td>
                                        </tr>
                                        <tr>
                                            <td>Fri - Sat:</td>
                                            <td>8am - 1am</td>
                                        </tr>
                                        <tr>
                                            <td>Sunday:</td>
                                            <td>9am - 10pm</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        © 2020 Copyright:
                        <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer

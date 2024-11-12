import Particles from "react-tsparticles";
import particlesConfig from "../../public/particlesConfig.json"; // Adjust this path to where you save your JSON config

const GetInTouch = () => {
    return (
        <div>
            <section className="pb-5 mb-4" id="contact">
                <div className="mb-5" style={{ position: "relative" }}>
                    {/* Particles Background */}
                    <Particles
                        id="tsparticles"
                        options={particlesConfig}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            zIndex: -1,
                        }}
                    />

                    {/* Contact Form */}
                    <div className="col-md-12 from-section from-custom">
                        <h1 className="text-center mt-4 mb-4 font-weight-bold">Get In Touch</h1>
                        <form method="POST" action="#">
                            <div className="form-row">
                                <div className="col mb-3">
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder="Name"
                                        required
                                    />
                                </div>
                                <div className="col">
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="subject"
                                        className="form-control mb-3"
                                        placeholder="Subject"
                                        required
                                    />
                                    <textarea
                                        name="message"
                                        className="form-control"
                                        rows="3"
                                        placeholder="Message"
                                        required
                                    ></textarea>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GetInTouch;

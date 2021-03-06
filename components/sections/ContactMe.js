import { FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";

const ContactMe = () => {
    return (
        <section className="contact section bg-body dark:bg-body-dark md:pt-24 md:px-0 md:pb-8" id="contact">
            <h2 className="section__title dark:text-title-dark">Contact Me</h2>
            <span className="section__subtitle dark:text-text-dark md:mb-16">Get in touch</span>

            <div className="contact__container container grid gap-6 gap-y-12 xs:mx-4 sm:grid-cols-[repeat(2,_1fr)] md:mx-auto">
                <div className="contact__data">
                    <div className="contact__information flex mb-8 items-center">
                        <FiMail className="contact__icon text-[2rem] text-primary mr-3" />
                        <div className="contact__info">
                            <h3 className="contact__title text-base font-medium dark:text-title-dark">Email</h3>
                            <a href="mailto:abraham.serena@hotmail.com" className="contact__link">
                                <span className="contact__subtitle text-sm text-text-light dark:text-text-dark">abraham.serena@hotmail.com</span>
                            </a>
                        </div>
                    </div>
                    <div className="contact__information flex mb-8 items-center">
                        <FiLinkedin className="contact__icon text-[2rem] text-primary mr-3" />
                        <div className="contact__info">
                            <h3 className="contact__title text-base font-medium dark:text-title-dark">LinkedIn</h3>
                            <a href="https://www.linkedin.com/in/abraham-serena/" target="_blank" rel="noopener noreferrer" className="contact__link">
                                <span className="contact__subtitle text-sm text-text-light dark:text-text-dark">Abraham Serena</span>
                            </a>
                        </div>
                    </div>
                    <div className="contact__information flex mb-8 items-center">
                        <FiMapPin className="contact__icon text-[2rem] text-primary mr-3" />
                        <div className="contact__info">
                            <h3 className="contact__title text-base font-medium dark:text-title-dark">Location</h3>
                            <span className="contact__subtitle text-sm text-text-light dark:text-text-dark">M&eacute;xico or Remote</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactMe;
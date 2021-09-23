import React from 'react';

function Contact() {
    return (
        <section className='contact-container'>
            <article>
                <h3>Kontakt</h3>
                <span className='text-shadow'> </span>
            </article>
            <article className='contact-page'>
                <a
                    href='mailto:mathildapetterssonn@hotmail.com'
                    target='_blank'
                    rel='noreferrer'
                    className='contact-page_link'
                >
                    <div className='contact-page_box'>
                        <h4>E-post</h4>
                        <i className='contact-icon fab fas fa-envelope'></i>
                        <p className='email-link'>
                            Mathildapetterssonn
                            <br />
                            @hotmail.com
                        </p>
                    </div>
                </a>

                <a
                    href='https://www.linkedin.com/in/mathilda-pettersson-087a241b5/'
                    target='_blank'
                    rel='noreferrer'
                    className='contact-page_link'
                >
                    <div className='contact-page_box'>
                        <h4>LinkedIn</h4>
                        <i className='contact-icon fab fa-linkedin'></i>
                        <p>Mathilda Pettersson</p>
                    </div>
                </a>

                <a
                    href='https://www.instagram.com/mathildap/'
                    target='_blank'
                    rel='noreferrer'
                    className='contact-page_link'
                >
                    <div className='contact-page_box'>
                        <h4>Instagram</h4>
                        <i className='contact-icon fab fa-instagram'></i>
                        <p>Mathildap</p>
                    </div>
                </a>

                <a
                    href='https://github.com/Mathildap'
                    target='_blank'
                    rel='noreferrer'
                    className='contact-page_link'
                >
                    <div className='contact-page_box'>
                        <h4>Github</h4>
                        <i className='fab fa-github'></i>
                        <p>Mathildap</p>
                    </div>
                </a>
            </article>
        </section>
    );
}

export default Contact;

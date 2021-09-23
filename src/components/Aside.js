import React from 'react';
import profilePic from '../img/mp-image.JPG';

function Aside() {
    return (
        <aside>
            <section className='contact-box'>
                <div className='placeholder-box'>
                    <img
                        src={profilePic}
                        alt='Mathilda Pettersson Front end developer'
                        className='placeholder-image'
                    />
                </div>
                <h3 className='contact-h'>Kontakt</h3>
                <p>
                    <a
                        href='mailto:mathildapetterssonn@hotmail.com'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <i className='fab fas fa-envelope'></i>
                    </a>
                    <a
                        href='https://www.linkedin.com/in/mathilda-pettersson-087a241b5/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <i className='fab fa-linkedin'></i>
                    </a>
                    <a
                        href='https://www.instagram.com/mathildap/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <i className='fab fa-instagram'></i>
                    </a>
                    <a
                        href='https://github.com/Mathildap'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <i className='fab fa-github'></i>
                    </a>
                </p>
            </section>
            <section className='aside-profile'>
                <h3>Kompetens</h3>
                <ul>
                    <li>HTML5, CSS</li>
                    <li>Sökoptimering</li>
                    <li>Tillgänglighet</li>
                    <li>
                        <strong>JavaScript</strong>
                    </li>
                    <li>Git</li>
                    <li>Github</li>
                    <li>Node , Express</li>
                    <li>MySQL, MongoDB</li>
                    <li>
                        <strong>React</strong>
                    </li>
                    <li>Svelte, Vue, Typescript</li>
                </ul>
            </section>
        </aside>
    );
}

export default Aside;

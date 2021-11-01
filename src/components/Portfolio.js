import React from 'react';

function Portfolio() {
    return (
        <section className='portfolio-container'>
            <article>
                <h3>Portfolio</h3>
                <span className='text-shadow'> </span>
                <p className='portfolio-text'>
                    Här lägger jag upp mina projekt, både mina egna och
                    skolarbeten. Vissa pågående och en del slutförda!
                </p>
                <article>
                    <h3>Github</h3>
                    <span className='text-shadow'> </span>
                    <h4>Repos</h4>
                </article>

                <div className='portfolio-github-container'>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        className='github'
                        href='https://github.com/Mathildap/CALENDAR-REACT'
                    >
                        <article className='github-box'>
                            <div className='github-img-box'>
                                <div className='github-repo7_img'></div>
                                <p id='repo7'></p>
                            </div>
                            <div className='github-repo-text'>
                                <p className='repo-descrip'>Calendar</p>
                            </div>
                        </article>
                    </a>

                    <a
                        target='_blank'
                        rel='noreferrer'
                        className='github'
                        href='https://eventmakarna.com/'
                    >
                        <article className='github-box'>
                            <div className='github-img-box'>
                                <div className='github-eventmakarna_img'></div>
                                <p id='repo8'></p>
                            </div>
                            <div className='github-repo-text'>
                                <p className='repo-descrip'>
                                    Hemsida åt Eventmakarna AB
                                </p>
                            </div>
                        </article>
                    </a>

                    <a
                        target='_blank'
                        rel='noreferrer'
                        className='github'
                        href='https://github.com/Mathildap/BubblesOMG-GAME'
                    >
                        <article className='github-box'>
                            <div className='github-img-box'>
                                <div className='github-repo8_img'></div>
                                <p id='repo8'></p>
                            </div>
                            <div className='github-repo-text'>
                                <p className='repo-descrip'>
                                    BubblesOMG - Spel
                                </p>
                            </div>
                        </article>
                    </a>

                    <a
                        target='_blank'
                        rel='noreferrer'
                        className='github'
                        href='https://mathildap.github.io/'
                    >
                        <article className='github-box'>
                            <div className='github-img-box'>
                                <div className='github-repo1_img'></div>
                                <p id='repo1'></p>
                            </div>
                            <div className='github-repo-text'>
                                <p className='repo-descrip'>
                                    Mathildap - Website
                                </p>
                            </div>
                        </article>
                    </a>

                    <a
                        target='_blank'
                        rel='noreferrer'
                        className='github'
                        href='https://github.com/Mathildap/Sten-Sax-Pase'
                    >
                        <article className='github-box'>
                            <div className='github-img-box'>
                                <div className='github-repo2_img'></div>
                                <p id='repo2'></p>
                            </div>
                            <div className='github-repo-text'>
                                <p className='repo-descrip'>
                                    Sten, sax, påse - Spel
                                </p>
                            </div>
                        </article>
                    </a>

                    <a
                        target='_blank'
                        rel='noreferrer'
                        className='github'
                        href='https://github.com/Mathildap/MAKE-NOTES'
                    >
                        <article className='github-box'>
                            <div className='github-img-box'>
                                <div className='github-repo3_img'></div>
                                <p id='repo3'></p>
                            </div>
                            <div className='github-repo-text'>
                                <p className='repo-descrip'>To-do List</p>
                            </div>
                        </article>
                    </a>

                    <a
                        target='_blank'
                        rel='noreferrer'
                        className='github'
                        href='https://github.com/Mathildap/Webshop'
                    >
                        <article className='github-box'>
                            <div className='github-img-box'>
                                <div className='github-repo5_img'></div>
                                <p id='repo5'></p>
                            </div>
                            <div className='github-repo-text'>
                                <p className='repo-descrip'>
                                    Webshop och login-sida
                                </p>
                            </div>
                        </article>
                    </a>

                    <a
                        target='_blank'
                        rel='noreferrer'
                        className='github'
                        href='https://github.com/Mathildap/LETS-TALK'
                    >
                        <article className='github-box'>
                            <div className='github-img-box'>
                                <div className='github-repo6_img'></div>
                                <p id='repo6'></p>
                            </div>
                            <div className='github-repo-text'>
                                <p className='repo-descrip'>Lets Talk - Chat</p>
                            </div>
                        </article>
                    </a>
                </div>
            </article>
        </section>
    );
}

export default Portfolio;

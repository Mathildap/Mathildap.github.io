import React from 'react';

function Experience() {
    return (
        <section className='experience-container'>
            <article>
                <h3>Utbildning</h3>
                <span className='text-shadow'> </span>
                <div className='experience-text'>
                    <h4>
                        Front End developer, Medieinstitutet ⎮ 12/2020 -
                        pågående (2022)
                    </h4>
                    <p>
                        Slutförda kurser är Html/CSS, JavaScript grundkurs,
                        Arbetsmetodik (git), Dynamisk utveckling (api:er,
                        databasen, node.js, express).
                        <br />
                        Pågående kurs är Javascript fördjupning som innehåller
                        främst React men också en inblick i Svelte, Vue och
                        Typescript.
                        <br />
                        Kommande kursen är bl.a. agila metoder, UX,
                        gränssnittsdesign och projektledning.
                    </p>
                    <h4>Handelsprogrammet, Jensen gymnasium ⎮ 2009 - 2012</h4>
                    <p>
                        Pluggade handels med inriktning försäljning och
                        entreprenörskap. Drev mitt egna UF-företag och gick
                        kurser inom marknadsföring, försäljning, webbdesign och
                        företagande.
                    </p>
                </div>
            </article>
            <article>
                <h3>Arbetserfarenhet</h3>
                <span className='text-shadow'> </span>
                <div className='experience-text'>
                    <h4>H&M ⎮ 2012 - 2020</h4>
                    <p>
                        Tjänster: Visual merchandiser, Ställföreträdande
                        butikschef och säljare. <br />
                        Resor/projekt: Sydafrika 2015 och Cypern 2016,
                        supportade som säljare i deras första butiker.
                        <br />
                        Kompetens inom ledarskap, försäljning, visuell
                        kundupplevelse, administration och kundservice.
                        <br />
                        Referens vid förfrågan.
                    </p>
                    <h4>Övriga jobb ⎮ 2007-2012</h4>
                    <p>
                        Lärkbacksskolan: Lärarvikarie, låg- och mellanstadie.{' '}
                        <br />
                        Johanssons Café.
                    </p>
                </div>
            </article>
        </section>
    );
}

export default Experience;

import React from 'react';
import Add from '../img/croix.svg'

export default function HomePage() {
    const date = new Date();
    const month = date.toLocaleString('default', {month: 'long'});

    React.useEffect(() => {
        const addEvent = document.querySelector('.header-calendar .add');
        console.log(addEvent);

        addEvent.addEventListener('click', function () {
            addEvent.classList.toggle('open');
        });
    }, []);

    return (

        <>

            <header className={'header-calendar'}>
                <div className={'month'}>{month}</div>
                <img src={Add} className={'add'} alt={'add'}></img>
            </header>
            <div className="calendar"></div>
            <div className="add-event">
                <form action="">
                    <div className="selects">
                        <select name="day" id="day">
                            <option value="" disabled selected>Jour</option>
                            <option value="lundi">Lundi</option>
                            <option value="mardi">Mardi</option>
                            <option value="mercredi">Mercredi</option>
                            <option value="jeudi">Jeudi</option>
                            <option value="vendredi">Vendredi</option>
                        </select>
                        <select name="hour" id="hour">
                            <option value="" disabled selected>Heure</option>
                            <option value="midi">Midi</option>
                            <option value="soir">Soir</option>
                        </select>
                        <select name="frequency" id="frequency">
                            <option value="" disabled selected>Fréquence</option>
                            <option value="by-week">Par semaine</option>
                            <option value="by-month">Par mois</option>
                        </select>
                    </div>
                    <button type={'submit'}>Ajouter la séance au planning</button>
                </form>
            </div>

        </>

    );

}
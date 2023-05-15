import React from 'react';
import Vid from './Vid';
import BookList from './BookList';
function HomePage() {
    
    return (
        <div className="HomePage">
                <h1>Kuuluuko kirjat sun elämään?</h1>
                <br></br>
                <p>Media on pullollaan artikkeleita, tutkimuksia, uutisia ja mielipidekirjoituksia lasten ja nuorten lukuharrastuksen vähyydestä ja heikentyneestä lukutaidosta. Lukuharrastuksella on runsaasti hyötyjä: Lukemisen tuoman ilon ja uusien elämysten lisäksi, harrastus kehittää myös tekstinhallintataitoja, parempaa kokonaisvaltaista lukutaitoa, ymmärrystä maailmasta ja laajentaa sanavarastoa. Hyvä lukutaito on myös perusedellytys sille, että selviytyy esimerkiksi jatko-opinnoissa ja muussa elämässä.</p>
                <p>
                Jos lukemisesta ei kuitenkaan vielä ole tullut sinulle harrastusta, ei syytä huoleen - aina on mahdollista aloittaa. Me Lukukeskuksella haluamme rohkaista jokaista lasta ja nuorta löytämään uusi harrastus kirjojen parissa, minkä takia päädyimme luomaan kampanjan ”Valitse kirja, skippaa some” kirjastojen kanssa. Tällä sivustolla voit selvittää testillä, mikä kirjagenre voisi olla sinulle mieleinen, saada tietoa lukemisen hyödyistä sekä seurata kampanjan päähenkilön, Emman, uutta elämää lukemisen parissa. Emma ei ole oikea henkilö, vaan hän perustuu haastattelutuloksiin, joita keräsimme 7-17-vuotiailta lukemisesta ja kirjallisuudesta.
                </p>
                <p>
                Toivotamme sinut tervetulleeksi kirjojen ihmeelliseen maailmaan, toivottavasti tämän kampanjan myötä lukemisesta tulisi osa sinun elämääsi.
                </p>
                <p>
Lukuiloa toivottaen,
                </p>
<p>
Lukukeskus ja Kirjastot
</p>
            <div>
                <Vid />
                <BookList />
            </div>
            <br />
            </div>
    );
}
 
export default HomePage;
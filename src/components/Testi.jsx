import React from 'react';
import ActualTest from './ActualTest';

function Testi() {

        return (
            <div className="Testi">
                <h1>Onko sinun vaikea löytää hyvää luettavaa?</h1>
                <br />
                <p>Jos kirjat ovat sinulle uusi tuttavuus, ei hätää - 
tämän testin avulla pääset lukuharrastuksessa ainakin 
alkuun. Nautitko selkäpiitä karmivista trillereistä vai kenties 
rakkausromaaneista? Tällä testillä pystyt selvittämään, mikä
kirjagenre sopii parhaiten omaan makuusi.</p>
                <br />
                <br />
                <ActualTest />

            </div>
    );
}
 
export default Testi;
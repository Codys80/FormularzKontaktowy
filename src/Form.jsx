import { useState } from 'react';
import './Form.css'
export default function Form(){
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [isSend, setIsSend] = useState(false);
    return(<article>
                <div className="form-control form form-floating">
                    <h3> Masz Pytanie? </h3>
                    <div className='container'>
                        <div className="col md-2">
                            <label className="form-label fw-lighter fst-italic fs-6" for = "entryName">Imie:</label><br/>
                            <input id="entryName" onChange={(e) => setName(e.target.value)}/><br/>
                        </div >
                        <div className="col md-2">
                            <label className="form-label fw-lighter fst-italic fs-6" for = "entrySurname"> Nazwisko:</label><br/>
                            <input id="entrySurname" onChange={(e) => setSurname(e.target.value)}/><br/>
                        </div>
                        <div className="col md-2">
                            <label className="form-label fw-lighter fst-italic fs-6" for = "entryEmail">Adres Email:</label><br/>
                            <input id="entryEmail" onChange={(e) => setEmail(e.target.value)}/><br/>
                        </div>
                        <div className="col md-2">
                            <label className="form-label fw-lighter fst-italic fs-6" for = "entryPhone">Numer telefonu (opcjonalnie):</label><br/>
                            <input id="entryPhone" onChange={(e) => setPhone(e.target.value)}/><br/>
                        </div>
                        <div className="col md-2">
                            

                                <label  class="form-label fw-lighter fst-italic fs-6">Treść wiadomości</label>
                                
                                <textarea class="form-control bg-white" onChange={(e) => setMessage(e.target.value)}></textarea>

                        </div>    
                        <div className="col md-2"> 
                            <input className="form-check-input mt-0" type="checkbox" id='agree' onChange={() => setIsChecked(!isChecked)}/> 
                            <label className='float-end badge text-bg-primary text-wrap fw-lighter fst-italic'>Administratorem danych osobowych jest nazwa firmy z pełnym adresem. Dane wpisane w formularzu kontaktowym będą przetwarzane w celu udzielenia odpowiedzi na przesłane zapytanie zgodnie z polityką prywatności</label>


                        </div >
                        <div className="col md-2">
                            <button id="sendButton" className="btn btn-danger" onClick={() =>setIsSend(true)}>Wyślij</button>
                        </div>
                    </div>
                </div>
                <div id='displayData'  className= { isSend ? " ": "sendInactive" } >
                   <ul>
                        <li>{name}</li>
                        <li>{surname}</li>
                        <li>{email}</li>
                        <li>{phone}</li>
                        <li>{message}</li>
                        <li>{isChecked ? "zatwierdzono zgode": "nie zatwierdzono zgody"}</li>
                   </ul>
                </div>
        </article>);
}
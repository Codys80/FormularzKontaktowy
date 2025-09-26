import { useState } from 'react';
import './Form.css'
export default function Form(){
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    function handleSendButton(){

    }
    return(<article>
                <div className="form-control form">
                    <h3> Masz Pytanie? </h3>
                    <div class="mb-3">
                        <label class="form-label fw-lighter fst-italic fs-6">Imie:</label><br/>
                        <input id="entryName" onChange={(e) => setName(e.target.value)}/><br/>
                    </div >
                    <div class="mb-3">
                        <label class="form-label fw-lighter fst-italic fs-6"> Nazwisko:</label><br/>
                        <input id="entrySurname" onChange={(e) => setSurname(e.target.value)}/><br/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-lighter fst-italic fs-6">Adres Email:</label><br/>
                        <input id="entryEmail" onChange={(e) => setEmail(e.target.value)}/><br/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-lighter fst-italic fs-6">Numer telefonu (opcjonalnie):</label><br/>
                        <input id="entryPhone" onChange={(e) => setPhone(e.target.value)}/><br/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-lighter fst-italic fs-6">Treść wiadomości</label><br/>
                        <input id="entryMessage" onChange={(e) => setMessage(e.target.value)}/><br/>
                    </div>    
                    <div class="mb-2"> 
                        <input type="checkbox" id='agree'/> <label className='badge text-bg-primary text-wrap fw-lighter fst-italic'>Administratorem danych osobowych jest nazwa firmy z pełnym adresem. Dane wpisane w formularzu kontaktowym będą przetwarzane w celu udzielenia odpowiedzi na przesłane zapytanie zgodnie z polityką prywatności</label>
                    </div >
                    <div class="mb-3">
                        <button id="sendButton" className="btn btn-danger" onClick={(e) =>handleSendButton(e.target.value)}>Wyślij</button>
                    </div>
                </div>
        </article>);
}
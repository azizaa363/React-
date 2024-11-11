import section6_telefon from '/section6_telefon.png'
import section6_pil from'/section6_pil.png'
import section6_mail from'/section6_mail.png'


function Section06 () {

    return(

<div id="section6">
    <div id="sec6_1">
        <div id="sec6_1_Rubrik">
            <h1>Any questions? <br/> Check out the FAQs</h1>
        </div>
        <div id="sec6_1_Brodtext">
            <p>Still have unanswered questions and need to get <br/> in touch?</p>
        </div>
        <div id="sec6_1_knappar">
            <div id="telefon">
                <div id="telefon_over">
                    <img src={section6_telefon} alt="Telefon ikon"/>
                    <p>Still have  questions?</p>
                </div>
                <div id="telefon_under">
                    <p>Contact us</p>
                    <img src={section6_pil} alt="pil ikon"/>

                </div>
            </div>
            <div id="mail">
                <div id="mail_over">
                    <img src={section6_mail} alt="Mail ikon"/>
                    <p>Don't like phone calls?</p>
                </div>
                <div id="mail_under">
                    <p>Contact us</p>
                    <img src={section6_pil} alt="pil ikon"/>
                </div>
            </div>

        </div>

    </div>
    <div id="sec6_2">
        <div id="container">
            <div id="sec6_rullista1">
                <div class="faq" id="faq1">
                    <p> Is any of my personal information stored in this App?</p>
                </div>   
                <div id="pilknapp1">
                    <div id="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div id="sec6_rullista2">
                <div class="faq" id="faq2">
                    <p>What formats can I download my transaction history in?</p>
                </div>
                <div id="pilknapp2">
                    <div id="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div id="sec6_rullista3">
                <div class="faq" id="faq3">
                    <p>Can I schedule future transfers?</p>
                </div>
                <div id="pilknapp3">
                    <div id="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div id="sec6_rullista4">
                <div class="faq" id="faq4">
                    <p>When can I use Banking App services?</p>
                </div>
                <div id="pilknapp4">
                    <div id="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div id="sec6_rullista5">
                <div class="faq" id="faq5">
                    <p>Can I create my own password that is easy for me to remember?</p>
                </div>
                <div id="pilknapp5">
                    <div id="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div id="sec6_rullista6">
                <div class="faq" id="faq6">
                    <p>What happens if I forget or lose my password?</p>
                </div>
                <div id="pilknapp6">
                    <div id="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>
                    </div>    
                </div>
            </div>
        </div>
    </div>
</div>    

)

}

export default Section06
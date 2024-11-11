import Si from '/Si.png'
import Appstore from '/appstore.png'
import googleplay from '/googleplay.png'
import fetmobilbild from '/fetmobilbild.png'

function Section01() {
    return (
        <div id="section1">
            <div id="navbar">
                <div id="navbar1">
                    <div id="Silicon_hela">
                        <div id="silicon_bild">
                            <img src= {Si} alt="Silicon logo"/>
                        </div>
                        <div id="silicon">
                            <p>Silicon</p>
                        </div>
                    </div>
                    <div id="Features">
                        <p>Features</p>
                    </div>

                </div>
                <div id="navbar2">
                    <div id="hela_darkmode">
                        <div id="darkmode_text">
                            <p>Dark Mode</p>
                        </div>
                        <div id="darkmode_knapp">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                            </div>
                        </div>
                    </div>
                    <div id="Signin_up">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                        </svg>
                        <p>Sign in/up</p>
                    </div>
                </div>
            </div>
            <div id="hero">
                <div id="hero1">
                    <div id="hero1_1">
                        <h1>Manage All Your <br/> Money in One App</h1>
                    </div>
                    <div id="hero1_2">
                        <p>We offer you a new generation of the mobile banking. <br/>
                            Save, spend & manage money in your pocket.</p>
                    </div>
                    <div id="hero1_3">
                        <div id="appstore">
                            <img src= {Appstore} alt="Appstore image"/>
                        </div>
                        <div id="googleplay">
                            <img src={googleplay} alt="Googleplay image"/>
                        </div>

                    </div>
                    <div id="hero1_4">
                        <div id="pilknapp">
                            <div id="arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                </svg>
                            </div>
                        </div>
                        <div id="Discover_more">
                            <p>Discover more</p>
                        </div>
                    </div>



                </div>
                <div id="hero2">
                    <div id="hero2_image">
                        <img src={fetmobilbild} alt="En fet mobil bild" />

                    </div>
                </div>

            </div>



        </div>
    )


}

export default Section01
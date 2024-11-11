import logo1 from '/logo1.png'
import logo2 from '/logo2.png'
import logo3 from '/logo3.png'
import logo4 from '/logo4.png'
import logo5 from '/logo5.png'
import logo6 from '/logo6.png'
import sektion2_mobilbild from '/sektion2_mobilbild.png'
import stapel_bild1 from '/stapel_bild1.png'
import stapel_bild2 from '/stapel_bild2.png'
import stapel_bild3 from '/stapel_bild3.png'
import stapel_bild4 from '/stapel_bild4.png'
import stapel_bild5 from '/stapel_bild5.png'
import stapel_bild6 from '/stapel_bild6.png'

function Section02() {
    return (
        <div id="section2">
            <div id="logobar">
                <div class="logo">
                    <img src={logo1} alt="En bild på loga 1"/>
                </div>
                <div class="logo">
                    <img src={logo2} alt="En bild på loga 2"/>
                </div>
                <div class="logo">
                    <img src={logo3} alt="En bild på loga 3"/>
                </div>
                <div class="logo">
                    <img src={logo4} alt="En bild på loga 4"/>
                </div>
                <div class="logo">
                    <img src={logo5} alt="En bild på loga5"/>
                </div>
                <div class="logo">
                    <img src={logo6} alt="En bild på loga6"/>
                </div>

            </div>
            <div id="heros2">
                <div id="heros2_1">
                    <div id="heros2_1_bild">
                        <img src= {sektion2_mobilbild} alt="EN fetare mobil bild" id="fetbild"/>
                    </div>
                </div>
                <div id="heros2_2">
                    <div id="hela_appfeatures">
                        <div id="appfeatures">
                            <h1>App Features</h1>
                        </div>
                        <div id="appfeatures_brodtext">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
                        </div>
                    </div>
                    <div id="stapel">
                        <div id="stapel1">
                            <div id="stapel1_1">
                                <div id="stapel1_1_img">
                                    <img src={stapel_bild1} alt="bild1"/>
                                </div>
                                <div id="stapel1_1_text" class="stapeltext">
                                    <h5>Easy Payments</h5>
                                    <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo</p>
                                </div>
                            </div>
                            <div id="stapel1_2" class="stapeltext">
                                <div id="stapel1_2_img">
                                    <img src={stapel_bild2} alt="bild2"/>
                                </div>
                                <div id="stapel1_2_text" class="stapeltext">
                                    <h5>Cost Statistics</h5>
                                    <p>Mattis urna ultricies non amet,  purus in auctor non. Odio vulputate ac nibh.</p>
                                </div>
                            </div>
                            <div id="stapel1_3">
                                <div id="stapel1_3_img">
                                    <img src={stapel_bild3} alt="bild3"/>
                                </div>
                                <div id="stapel1_3_text" class="stapeltext">
                                    <h5>Regular Cashback</h5>
                                    <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
                                </div>
                            </div>
                        </div>
                        <div id="stapel2">
                            <div id="stapel2_1">
                                <div id="stapel2_1_img">
                                    <img src={stapel_bild4} alt="bild4"/>
                                </div>
                                <div id="stapel2_1_text" class="stapeltext">
                                    <h5>Data Security</h5>
                                    <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
                                </div>
                            </div>
                            <div id="stapel2_2">
                                <div id="stapel2_2_img">
                                    <img src={stapel_bild5} alt="bild5"/>
                                </div>
                                <div id="stapel2_2_text" class="stapeltext">
                                    <h5>Support 24/7</h5>
                                    <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                                </div>
                            </div>
                            <div id="stapel2_3">
                                <div id="stapel2_3_img">
                                    <img src={stapel_bild6} alt="bild6"/>
                                </div>
                                <div id="stapel2_3_text" class="stapeltext">
                                    <h5>Top Standards</h5>
                                    <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
                                </div>    
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section02
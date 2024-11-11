import section4bxcheckcircle from '/section4_bx-check-circle.png'
import section4_höger from '/section4_höger.png'
import section4_vänster from '/section4_vänster.png'
import stapel_bild1 from '/stapel_bild1.png'
import stapel_bild3 from '/stapel_bild3.png'


function Section04 () {

    return(
        <div id="section4">
            <div id="section4_over">
                <div id="section4_overr_vänster">
                    <div id="sec4_over_1">
                        <div id="sec4_over1_rubrik">
                            <h1>Make your money <br/> transfer simple and clear</h1>
                        </div>
                        <div id="sec4_over1_punktlista1">
                            <div id="sec4_over1_punktlista1_bild">
                                <img src={section4bxcheckcircle} alt="Check"/>
                            </div>
                            <div id="sec4_over1_punktlista1_text">
                                <p>Banking transactions are free for you</p>
                            </div>
                        </div>
                        <div id="sec4_over1_punktlista2">   
                            <div id="sec4_over1_punktlista2_bild">
                                <img src={section4bxcheckcircle} alt="Check"/>
                            </div>
                            <div id="sec4_over1_punktlista2_text">  
                                <p>No monthly cash commission</p>
                            </div>
                        </div>
                        <div id="sec4_over1_punktlista3">    
                            <div id="sec4_over1_punktlista3_bild">
                                <img src={section4bxcheckcircle} alt="Check"/>
                            </div>
                            <div id="sec4_over1_punktlista3_text"> 
                                <p>Manage payments and transactions online</p>
                            </div>
                        </div>
                        
                        <div id="sec4_over1_knapp">
                            <p>Learn more</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                              </svg>   
                        </div>


                    </div>
                </div>
                <div id="section4_overr_hoger">    
                    <div id="sec4_over_2">
                        <div id="sec4_over2_bild">
                            <img src={section4_höger} alt=""/>
                        </div>
                </div>
                </div>    
            </div>
            <div id="section4_under">
                <div id="section4_underr">
                    <div id="sec4_under_1">
                        <div id="sec4_under_2_bild">
                            <img src={section4_vänster} alt=""/>
                        </div>
                    </div>
                    <div id="sec4_under_2">
                        <div id="sec4_under2_rubrik">
                            <h1>Receive payment from <br/> international bank details</h1>
                        </div>
                        <div id="sec4_under2_sidolista">
                            <div id="sec4_under2_sidolista1">
                                <div id="sec4_under2_sidolista1_bild">
                                    <img src={stapel_bild1} alt="kort ikon"/>
                                </div>
                                <div id="sec4_under2_sidolista1_text">
                                    <p>Manage your payments online. <br/> Mollis congue egestas egestas <br/> fermentum fames.</p>
                                </div>
                            </div>
                            <div id="sec4_under2_sidolista2">
                                <div id="sec4_under2_sidolista2_bild">
                                    <img src={stapel_bild3} alt="plånbok ikon"/>
                                </div>
                                <div id="sec4_under2_sidolista2_text">
                                    <p>A elementur and imperdiet enim, <br/> pretium etiam facilisi aenean <br/> quam mauris.</p>
                                </div>
                            </div>
                        </div>
                        <div id="sec4_under2_knapp">
                            <p>Learn more</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                              </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
)
}

export default Section04
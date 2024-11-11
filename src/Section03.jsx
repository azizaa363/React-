import iPhone12Pro_1 from '/iPhone12Pro_1.png'
import iPhone12Pro_2 from '/iPhone12Pro_2.png'
import iPhone12Pro_3 from '/iPhone12Pro_3.png'

function Section03()
{
    return(
        <div id="section3">
            <div id="Rubrik_section3">
                <h1>How Does It Work?</h1>
            </div>
            <div id="image_section3">
                <div id="img_section3_1">
                    <img src={iPhone12Pro_1} alt="IPhone bild 1"/>
                </div>
                <div id="img_section3_2">
                    <img src={iPhone12Pro_2} alt="IPhone bild 2"/>
                </div>
                <div id="img_section3_3">
                    <img src={iPhone12Pro_3} alt="iPhone bild 3"/>
                </div>

            </div>
            <div id="Fotnot_section3">
                <div id="Titel_fotnot_section3">
                    <h1>Latest transaction history</h1>
                </div>
                <div id="Text_fotnot_section3">
                    <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique <br/> quisque hac in consectetur condimentum. </p>
                </div>
            </div>
        </div>
    )
}

export default Section03
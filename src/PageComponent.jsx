
import Section01 from './Section01.jsx'
import Section02 from './Section02.jsx'
import Section03 from './Section03.jsx'
import Section04 from './Section04.jsx'
import Section05 from './Section05.jsx'
import Section06 from './Section06.jsx'
import Footer from './Footer.jsx'
import Copyright_footer from './Copyright_footer.jsx'

import './index.css'

function PageComponent() {
    return (

<div id="page">
        <Section01/>
        <Section02/>
        <Section03/>
        <Section04/>
        <Section05/>
        <Section06/>
        <Footer/>
        <Copyright_footer/>        
</div>

    )
}

export default PageComponent
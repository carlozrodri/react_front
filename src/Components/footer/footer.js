import "./footer.css";
import logo from "./output-onlinepngtools (2).png";
//fortawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faInstagram,
  faFacebook,

} from "@fortawesome/free-brands-svg-icons";

import 'react-responsive-select/dist/react-responsive-select.css';

library.add(fas, faTwitter, faInstagram, faFacebook);

function FooterBar() {
    return ( 
        
        <div>
<footer id="footer" className="footer-1">
<div className="
">
<div className="container">
<div className="row">
  
<div className="col-xs-12 col-sm-6 col-md-3">
<div className="widget subscribe no-box">
<img src={logo} alt="Logo" height="80" />


</div>
</div>

<div className="col-xs-12 col-sm-6 col-md-3">
<div className="widget no-box">
<h5 className="widget-title">Quick Links<span></span></h5>
<ul className="thumbnail-widget">
<li>
<div className="thumb-content"><a href="#.">Best Gadgets</a></div> 
</li>
<li>
<div className="thumb-content"><a href="#.">Newest Cameras</a></div> 
</li>
<li>
<div className="thumb-content"><a href="#.">Top 10 Beauty</a></div> 
</li>
<li>
<div className="thumb-content"><a href="#.">Best Girldfriend Present</a></div> 
</li>
</ul>
</div>
</div>

<div className="col-xs-12 col-sm-6 col-md-3">
<div className="widget no-box">
<h5 className="widget-title">Best Quality<span></span></h5>
<p>We only show you the best Amazon items.</p>

</div>
</div>

<div className="col-xs-12 col-sm-6 col-md-3">

<div className="widget no-box">
<h5 className="widget-title">Contact Us<span></span></h5>

<p><a href="mailto:info@Thetop8.co.uk" title="glorythemes">info@Thetop8.co.uk</a></p>
<FontAwesomeIcon icon={faFacebook} size="2x" />
{' '}
<FontAwesomeIcon icon={faTwitter} size="2x" />
{' '}
<FontAwesomeIcon icon={faInstagram} size="2x" />

</div>
</div>

</div>
</div>
</div>
  
<div className="footer-copyright">
<div className="container">
<div className="row">
<div className="col-md-12 text-center">
<p>Copyright Top 8 © 2022. All rights reserved.</p>
<p>Amazon, Amazon Prime, the Amazon logo and Amazon <br></br>Prime logo are trademarks of Amazon.com, Inc. or its affiliates</p>
</div>
</div>
</div>
</div>
</footer>
      </div>
 );
}

export default FooterBar;
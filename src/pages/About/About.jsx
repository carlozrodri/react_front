import { Card } from "react-bootstrap";
import NavBar from "../../Components/navbar/navbar";
// import EmailBar from "../Components/emailbar/emailbar";
import FooterBar from "../../Components/footer/footer";
import ItemList from "../../Components/itemlist/Itemlist";

function About() {
    return ( <div>
        <ItemList/>
        <NavBar/>
        <Card className="container p-4 text-zone  ">

     
        <Card.Body>
        At Top8 we pride ourselves in offering an incredible shopping experience. Whether you’re looking for the latest electronics, branded fashion, a new pair of shoes, kitchen appliances, or even baby products, we’re sure to have what you’re looking for.
Our aim is to provide an online shopping platform that is easy to use, reliable, and offers great value for money.
We hope you enjoy shopping with us!
        </Card.Body>
        </Card>
        <FooterBar/>
    </div> );
}

export default About;
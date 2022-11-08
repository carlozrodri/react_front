import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import isespecialLogo from "./oferta-especial.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";

export default function CardsChild(props) {
  return (
    <>
      <div className="contenido">
        {props.items.map((todo) => (
          <motion.a
            className="card card-body"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 0.9 }}
            href={todo.url_amazon}
          >
            <div className="contador-is_especial">
              <div className="contador">
                <p></p>
              </div>
              <div>
                {" "}
                {todo.is_especial === true && (
                  <img
                    src={isespecialLogo}
                    width="30 rem"
                    height="30 rem"
                    alt="Es especial"
                  />
                )}
              </div>
            </div>

            <div className="category-text-card">
              {" "}
              <h1 href={todo.category}>{todo.category}</h1>{" "}
            </div>
            <Card.Img
              className="img-fluid card-img-top w-100 "
              src={todo.item_pictures}
              alt={todo.item_description}
              // style={{ backgroundImage: `url(${todo.item_pictures})` }}
            />

            <h1 className="p-2"> {todo.item_description}</h1>

            <Card.Footer>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="btn btn-primary botonCheck"
                type="submit"
              >
                Check it NOW!
              </motion.button>

              <br />
              <FontAwesomeIcon icon={faAmazon} size="lg" />
              <small>{"  "}Amazon.co.uk</small>
            </Card.Footer>
          </motion.a>
        ))}
      </div>
    </>
  );
}

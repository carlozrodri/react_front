import "./itemlist.css";
import { motion } from "framer-motion";

function ItemList() {
  return (
    <div className="list-items">
      <div class="row-itemlist">
        <motion.a
         href="/Beauty"
          whileInView={{ opacity: 5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="col"
        >
          Beauty
        </motion.a>
        <motion.a
        href="/Garden"
          whileInView={{ opacity: 5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="col"
        >
          Garden
        </motion.a>
        <motion.a
          href="/Summer"
          whileInView={{ opacity: 5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="col"
        >
          Summer
        </motion.a>
        <motion.a
        href="/Sportwear"
          whileInView={{ opacity: 5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="col"
        >
          Sportwear
        </motion.a>
      </div>
    </div>
  );
}

export default ItemList;

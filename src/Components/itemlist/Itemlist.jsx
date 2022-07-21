import "./itemlist.css";
import { motion } from "framer-motion";

function ItemList() {
  return (
    <motion.div class="list-items">
      <div class="row">

        <motion.div
          whileInView={{ opacity: 5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="col"
          
        >
          Beauty
        </motion.div>
        <motion.div
          whileInView={{ opacity: 5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="col"
         
        >
          Garden
        </motion.div>
        <motion.div
          whileInView={{ opacity: 5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="col"
        >
          Summer
        </motion.div>
        <motion.div
          whileInView={{ opacity: 5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="col"
        >
          Sportwear
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ItemList;

import "./itemlist.css";
import { motion } from "framer-motion";

function ItemList() {
  return (
    <motion.div class="list-items">
      <div class="row">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 3 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          class="col"
        >
          Beauty
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 3 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          class="col"
        >
          Garden
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 3 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          class="col"
        >
          Summer
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 3 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          class="col"
        >
          Sportwear
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ItemList;

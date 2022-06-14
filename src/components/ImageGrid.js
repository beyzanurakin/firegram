import React from "react";
import useFireStore from "../hooks/useFireStore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFireStore("images");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => {
          const { id, url } = doc;
          return (
            <motion.div
              className="img-wrap"
              key={id}
              layout
              whileHover={{ opacity: 1 }}
              onClick={() => setSelectedImg(url)}
            >
              <motion.img
                src={url}
                alt="img"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          );
        })}
    </div>
  );
};

export default ImageGrid;

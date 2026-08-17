import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaTint,
  FaWaveSquare,
  FaBatteryThreeQuarters,
} from "react-icons/fa";

import { detectionData } from "../data/whyContinuousData";

const icons = {
  "Heart Rate": <FaHeartbeat />,
  "SpO₂": <FaTint />,
  "Rhythm": <FaWaveSquare />,
  "Battery": <FaBatteryThreeQuarters />,
};

export default function DetectionCard() {
  return (
    <motion.div
      className="detect-card"
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <span className="detect-title">
        WHAT CORLIFE DETECTED
      </span>

      <div className="detect-list">
        {detectionData.map((item, index) => (
          <motion.div
            key={item.title}
            className="detect-item"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.15,
              duration: 0.5,
            }}
            viewport={{ once: true }}
          >
            {/* Left */}
            <div className="detect-left">
              <div
                className="detect-icon"
                style={{ color: item.color }}
              >
                {icons[item.title]}
              </div>

              <div>
                <h4>{item.title}</h4>

                <p>
                  {item.current}
                  <span className="arrow">
                    {" "}
                    →{" "}
                  </span>
                  {item.next}
                </p>
              </div>
            </div>

            {/* Status */}

            <span
              className="status-pill"
              style={{
                background: `${item.color}25`,
                color: item.color,
              }}
            >
              {item.status}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
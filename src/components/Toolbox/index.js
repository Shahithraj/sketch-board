import styles from './index.module.css';
import { colors } from '../constants';
const Toolbox = () => {
  const updateBrushSize = () => {};
  console.log(colors);
  const box = ['BLACK', 'RED', 'BLUE', 'GREEN', 'YELLOW', 'ORANGE', 'WHITE'];

  return (
    <div className={styles.toolboxContainer}>
      <div className={styles.toolItem}>
        <h4 className={styles.toolText}>Stroke Color</h4>
        <div className={styles.itemContainer}>
          {box.map((color, index) => (
            <div
              key={index}
              className={styles.colorbox}
              style={{ backgroundColor: colors[color] }}
            ></div>
          ))}
          <div />
        </div>
      </div>
      <div className={styles.toolItem}>
        <h4 className={styles.toolText}> Brush Size</h4>
        <div className={styles.itemContainer}>
          <input
            type="range"
            min={1}
            max={10}
            step={1}
            onChange={updateBrushSize}
          />
        </div>
      </div>
    </div>
  );
};

export default Toolbox;

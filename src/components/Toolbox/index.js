import styles from './index.module.css';

const Toolbox = () => {
  const updateBrushSize = () => {};

  return (
    <div className={styles.toolboxContainer}>
      <div className={styles.toolItem}>
        <h4 className={styles.toolboxContainer}>Stroke Color</h4>
        <div className={styles.itemContainer}></div>
      </div>
      <div>
        <h4 className={styles.toolboxContainer}> Brush Size</h4>
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

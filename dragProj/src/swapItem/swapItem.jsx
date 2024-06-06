import styles from "./swapItem.module.css";
function SwapItem(props) {
  return (
    <div
      className={styles.swapItem}
      key={props.item}
      draggable
      onDragStart={props.DragStart}
      onDragEnter={props.DragOver}
      onDragEnd={props.Handel}
    >
      {props.Contant}
    </div>
  );
}
export default SwapItem;

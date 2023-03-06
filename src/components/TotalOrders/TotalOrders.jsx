import styles from './totalOrders.module.css';

export const TotalOrders = ({
  title,
  children
}) => {
  return (
    <div>
      <p className="text text_type_main-medium">{title}</p>
      <span className={`text text_type_digits-large ${styles.orders}`}>
        {!children ? '–' : children}
      </span>
    </div>
  );
};

export default TotalOrders;
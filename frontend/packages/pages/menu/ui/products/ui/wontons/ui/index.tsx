import './style.scss';
import { WontonItem } from '@zocom/types';
import { motion } from 'framer-motion';

interface WontonItemComponentProps {
  item: WontonItem;
  handleAddItem: (item: WontonItem) => void;
}

export const WontonItemComponent = ({
  item,
  handleAddItem,
}: WontonItemComponentProps) => {
  const { name, price, ingredients } = item;
  return (
    <motion.div
      whileTap={{ scale: 0.5 }}
      whileHover={{ y: -10, scaleY: 1.1 }}
      className='framer-motion'
    >
      <div
        className='menu-item'
        onClick={() => {
          handleAddItem(item);
        }}
      >
        <section className='menu-item__product'>
          <span className='menu-item-name'> {name}&nbsp; </span>
          <span className='menu-item-price'>&nbsp; {price}</span>
        </section>
        <section className='menu-item__ingredients'>
          {ingredients?.join(', ')}
        </section>
      </div>
    </motion.div>
  );
};

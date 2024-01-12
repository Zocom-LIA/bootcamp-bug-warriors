import './style.scss';
import { WontonItem } from '@zocom/types';

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
    <div
      className='menu-item'
      onClick={() => {
        handleAddItem(item);
      }}
    >
      <section className='menu-item__product'>
        <span className='menu-item-name'>{name}&nbsp;</span>
        <span className='menu-item-price'>&nbsp;{price}</span>
      </section>
      <section className='menu-item__ingredients'>
        {ingredients?.join(', ')}
      </section>
    </div>
  );
};

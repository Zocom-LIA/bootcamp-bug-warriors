import './style.scss';
import { MenuItemsContainer } from '@zocom/menu-container';
import { Styles, Wrapper } from '@zocom/wrapper';
import { addItem } from '@zocom/cart-actions';
import { useDispatch } from 'react-redux';
import { WontonItem } from '@zocom/types';
import { useEffect, useState } from 'react';
import { TopBar } from '@zocom/top-bar';
import { fetchMenu } from '@zocom/products';
import { WontonItemComponent } from '@zocom/wontons';
import { DipItemComponent } from '@zocom/dips';
import { MenuList, DipItem } from '@zocom/types';

export const Menu = () => {
  const [menu, setMenu] = useState<MenuList | null>(null);

  const [selectedDip, setSelectedDips] = useState<string[]>([]);
  const dispatch = useDispatch();
  const dipList = menu?.dip?.map((item) => item.name);
  const fullDipList: DipItem[] = menu ? menu?.dip?.map((item) => item) : [];

  useEffect(() => {
    fetchMenu()
      .then(setMenu)
      .catch((error) => console.error('Error fetching menu:', error));
  }, []);

  if (!menu) {
    return <div className='menu__loading'>Loading.....</div>;
  }

  const handleSelectDip: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    event.stopPropagation();
    const button = event.currentTarget;

    button.classList.toggle('sauce_button-active');
    if (selectedDip.includes(button.textContent!)) {
      setSelectedDips(
        selectedDip.filter((sauce) => sauce !== button.textContent!)
      );
    } else {
      setSelectedDips([...selectedDip, button.textContent!]);
    }
  };

  const handleAddItem = (item: WontonItem) => {
    dispatch(addItem(item, 'wonton'));
  };

  const handleAddDipItem = (item: WontonItem) => {
    dispatch(addItem(item, 'dip'));
  };

  return (
    <Wrapper style={Styles.MAIN}>
      <TopBar />
      <MenuItemsContainer>
        <h1 className='menu-heading'>MENY</h1>
        {menu.wonton.map((item, index) => (
          <WontonItemComponent
            key={index}
            item={item}
            handleAddItem={handleAddItem}
          />
        ))}
        <DipItemComponent
          item={fullDipList}
          sauceList={dipList}
          onclick={handleSelectDip}
          selectedDip={selectedDip}
          handleAddItem={handleAddDipItem}
        />
      </MenuItemsContainer>
    </Wrapper>
  );
};

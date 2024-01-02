import './style.scss';
import React from 'react';

type SauceButtonsProps = {
  sauceList: string[];
  selectedSauces: string[];
  setSelectedSauces: React.Dispatch<React.SetStateAction<string[]>>;
};

export function SauceButtons({
  sauceList,
  selectedSauces,
  setSelectedSauces,
}: SauceButtonsProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;

    button.classList.toggle('sauce_button-active');
    if (selectedSauces.includes(button.textContent!)) {
      setSelectedSauces(
        selectedSauces.filter((sauce) => sauce !== button.textContent!)
      );
    } else {
      setSelectedSauces([...selectedSauces, button.textContent!]);
    }
  };

  const buttonsList = sauceList.map((sauce) => (
    <button className='sauce_button' key={sauce} onClick={handleClick}>
      {sauce}
    </button>
  ));
  return <div className='sauce_buttons-container'>{buttonsList}</div>;
}

import React, { useEffect, useState } from 'react';
import { Text, Btn } from '../index';
import anime from 'animejs';
import { StyledDropDownItemsWrapper } from './DropDownStyle';

type DropDownType = {
  items: object[] | any;
  selectedItem: object | any;
  setSelectedItem: Function;
  width: string;
  titleFontSize: string;
  titleDefaultText: string;
};

export default function DropDown(props: DropDownType): JSX.Element {
  const { items, selectedItem, setSelectedItem, width, titleFontSize, titleDefaultText } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropDown = (type) => {
    if (type === 'open') {
      setIsOpen(true);
      anime({
        targets: '#dropDownItemsWrapper',
        height: [0, '200px'],
        delay: 0,
        easing: 'easeInOutExpo',
        duration: 400,
      });
    }

    if (type === 'close') {
      setIsOpen(false);
      anime({
        targets: '#dropDownItemsWrapper',
        height: ['200px', 0],
        delay: 0,
        easing: 'easeInOutExpo',
        duration: 400,
      });
    }
  };

  const closeDropDown = (event) => {
    !event.target.closest('#dropDownItemsWrapper') && isOpen ? toggleDropDown('close') : null;
  };

  const handleClick = (item) => {
    if (selectedItem.key !== item.key) setSelectedItem(item);
    toggleDropDown('close');
  };

  const handleDefaultValue = () => {
    // if (selectedItem) return selectedItem.value;
    // if (items?.length) return items[0].value;
    // //else if (defaultValue) return defaultValue.value;
    // else return 'global.select';
  };

  useEffect(() => {
    if (isOpen) document.addEventListener('click', closeDropDown);
    return () => document.removeEventListener('click', closeDropDown);
  }, [isOpen]);

  return (
    <>
      <Btn
        type="info-transparent"
        className="border-0 w-100 justify-content-center py-2 d-flex align-items-center"
        onClick={() => toggleDropDown('open')}
      >
        {/*<Icon name={`arrow-${isOpen ? 'up' : 'down'}`} color="textPrimary" size="18" />*/}
        <Text size="m">{titleDefaultText}</Text>
      </Btn>
      <StyledDropDownItemsWrapper
        width={width}
        id="dropDownItemsWrapper"
        type="hrBorder"
        className="position-absolute overflow-auto"
      >
        {items.map((item) => (
          <Btn
            key={item.key}
            type="info-transparent"
            className="border-0 w-100 justify-content-start d-flex px-3 py-2"
            onClick={() => handleClick(item)}
          >
            <Text size="s" color="PRIMARY_TEXT" className="text-nowrap">
              {item.value}
            </Text>
          </Btn>
        ))}
      </StyledDropDownItemsWrapper>
    </>
  );
}

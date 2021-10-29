import React, { useState } from 'react';
import { AiOutlineDown, AiOutlineLeft } from 'react-icons/ai';
import { ComplexObject } from 'types';
import { Card, Txt } from 'components';
import { useClickOutside } from 'hooks';
import { ItemsContainer, OptionItem, TitleBtn } from './DropDownStyle';

interface Props {
  items: { id: string | number; title: string }[];
  defaultTitle?: string;
  onChange: Function;
  width: string;
  id: string;
  className?: string;
}

export default function DropDown(props: Props): JSX.Element {
  const { items = [], onChange, width, id, defaultTitle, className = '' } = props;
  const [isOpen, setIsOpen] = useState<boolean>(null);
  const [selectedItem, setSelectedItem] = useState<string>('');

  useClickOutside({
    id,
    isActive: isOpen,
    close: () => setIsOpen(false),
  });

  const handleTitle = () => {
    if (selectedItem) return selectedItem;
    else if (defaultTitle) return defaultTitle;
    else return 'انتخاب';
  };

  const pickItem = (target) => {
    onChange?.(target);
    setSelectedItem(target.title);
    setIsOpen(false);
  };

  return (
    <Card width={width} className={'position-relative p-0 ' + className}>
      <TitleBtn isOpen={isOpen} onClick={() => setIsOpen(true)}>
        {isOpen ? <AiOutlineDown /> : <AiOutlineLeft />}
        <Txt color="BORDER" width="85%" numberOfLines="1">
          {handleTitle()}
        </Txt>
      </TitleBtn>
      <ItemsContainer isOpen={isOpen}>
        {items.map((item) => (
          <OptionItem align="center" key={item.id} onClick={() => pickItem(item)} size="s" numberOfLines="1">
            {item.title}
          </OptionItem>
        ))}
      </ItemsContainer>
    </Card>
  );
}

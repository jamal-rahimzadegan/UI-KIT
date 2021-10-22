import React, { useState } from 'react';
import { Btn, Hr, Txt } from 'components';
import { useClickOutside } from 'hooks';
import { ComplexObject } from 'types';
import { ItemsContainer, StyledDropDown } from './DropDownStyle';

interface Props {
  items: ComplexObject[];
  defaultTitle?: string;
  onChange: Function;
  width: string;
  id: string;
}

export default function DropDown(props: Props): JSX.Element {
  const { items, onChange, width, id, defaultTitle } = props;
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
    onChange(target);
    setSelectedItem(target.value);
    setIsOpen(false);
  };

  return (
    <StyledDropDown isOpen={isOpen} width={width} className="position-relative">
      <Btn
        textColor="PRIMARY_TEXT"
        bgColor="LIGHT_BLOCK_BG"
        hasRadius={false}
        className="py-3 overflow-hidden"
        width="inherit"
        onClick={() => setIsOpen(true)}
      >
        <Txt numberOfLines="1">{handleTitle()}</Txt>
      </Btn>
      <ItemsContainer isOpen={isOpen}>
        {items.map((item) => (
          <Btn isTransparent key={item.key} className="w-100" onClick={() => pickItem(item)}>
            <Txt size="s" color="PRIMARY_TEXT" numberOfLines="1">
              {item.value}
            </Txt>
            <Hr />
          </Btn>
        ))}
      </ItemsContainer>
    </StyledDropDown>
  );
}

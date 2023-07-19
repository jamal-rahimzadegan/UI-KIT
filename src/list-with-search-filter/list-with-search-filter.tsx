import { useState } from 'react';
import LWF from './style';

interface Props {
  items: any[];
}

export default function ListWithSearchFilter(props: Props) {
  const { items } = props;
  const [filteredList, setFilteredList] = useState(items);

  const filterByQuery = (event: any) => {
    const query = event.target.value;
    let updatedList = [...items];
    updatedList = updatedList.filter(
      (item) => item.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );

    setFilteredList(updatedList);
  };

  return (
    <LWF.Container>
      <input placeholder="Type here..." onChange={filterByQuery} />
      <ol>
        {filteredList.map((item, index) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </LWF.Container>
  );
}

import React from 'react';
import { ComplexObject } from 'types';
import { TableStyle, TD, TH, TR } from './TableStyle';

interface TableProps {
  data: ComplexObject[];
}

export default function Table(props: TableProps): JSX.Element {
  const { data } = props;

  const headerLabels: string[] = Object.keys(data[0]);

  const THead = () => (
    <thead>
      <TR>
        {headerLabels.map((item, i) => (
          <TH key={i} i={i}>
            {item}
          </TH>
        ))}
      </TR>
    </thead>
  );

  const TBody = () => (
    <tbody>
      {data.map((item, i) => (
        <TR key={item.id}>
          {Object.values(item).map((el, j) => (
            <TD key={el.id} i={j}>
              {el}
            </TD>
          ))}
        </TR>
      ))}
    </tbody>
  );

  return (
    <TableStyle {...props}>
      <THead />
      <TBody />
    </TableStyle>
  );
}

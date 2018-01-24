import * as React from 'react';

export interface Props {
  text?: String;
}

export default function App(props: Props) {
  return (
    <div>
      {props.text}
      bye
    </div>
  );
}

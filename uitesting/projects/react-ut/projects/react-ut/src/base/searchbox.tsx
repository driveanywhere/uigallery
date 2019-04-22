import {
  Icon,
  Stack,
} from 'office-ui-fabric-react';
import * as React from 'react';

interface ISearchBoxProps {
  placeholder?: string;
  onChange(newSearchText: string): void;
}

const containerStyles = {
  root: {
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    padding: '1px 4px',
    width: '300px',
    height: '32px',
  },
};

const inputStyle: React.CSSProperties = {
  borderStyle: 'none',
  paddingBottom: '0.5px',
  height: '26px',
  width: '258px',
};

const iconStyles = {
  root: {
    height: '28px',
    width: '32px',
    textAlign: 'center',
    lineHeight: '28px',
  },
};

export const SearchBox: React.FunctionComponent<ISearchBoxProps> = (props) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    props.onChange.call(undefined, newValue);
  };

  return (
    <Stack className="studio-search-box" horizontal={true} verticalAlign="center" styles={containerStyles}>
      <Stack.Item>
        <Icon iconName="Search" styles={iconStyles} />
      </Stack.Item>
      <Stack.Item>
        <input
          type="text"
          placeholder={props.placeholder || ''}
          style={inputStyle}
          onChange={onChange}
        />
      </Stack.Item>
    </Stack>
  );
};

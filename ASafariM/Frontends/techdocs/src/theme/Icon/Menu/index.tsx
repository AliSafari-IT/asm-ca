import React from 'react';
import Menu from '@theme-original/Icon/Menu';
import type MenuType from '@theme/Icon/Menu';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof MenuType>;

export default function MenuWrapper(props: Props): JSX.Element {
  return (
    <>
      <Menu {...props} />
    </>
  );
}

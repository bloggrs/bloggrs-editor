import { UserComponent, useNode, Canvas } from '@craftjs/core';
import cx from 'classnames';
import React from 'react';
import { Row } from 'react-bootstrap';
import styled from 'styled-components';
import { Element } from '@craftjs/core';
import { BootstrapRowSettings } from './BootstrapRowSettings';
import { Text } from '../Text';
import { BootstrapCol } from '../BootstrapCol';

type BootstrapRowProps = {
    className?: string;
    children?: React.ReactNode;
};

// export const BRow = 

export const BootstrapRow: UserComponent<BootstrapRowProps> = (props: any) => {
  const {
    connectors: { drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  const { className, children, ...otherProps } = props;
  return (
      <Element
      id={"boostrap_Row_" + Date.now().toString(36) + Math.random().toString(36).substr(2)}
      canvas
      is="div"
      style={{
        width: "100%",
        minHeight: "35px",
      }}
      className={cx([
          className,
          "row"
      ])}
    >
      <BootstrapCol/>
      <BootstrapCol/>
    </Element>
  )
}

BootstrapRow.craft = {
  displayName: 'Row',
  props: {},
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: BootstrapRowSettings,
  },
};

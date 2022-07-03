import { UserComponent, useNode, Canvas } from '@craftjs/core';
import cx from 'classnames';
import React from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Element } from '@craftjs/core';
import { BootstrapColSettings } from './BootstrapColSettings';
import { Text } from '../Text';

type BootstrapColProps = {
    className?: string;
    children?: React.ReactNode;
};

// export const BCol = 

export const BootstrapCol: UserComponent<BootstrapColProps> = (props: any) => {
  const {
    connectors: { drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  const { className, children, ...otherProps } = props;
  return (
      <Element
        id={"boostrap_Col_" + Date.now().toString(36) + Math.random().toString(36).substr(2)}
        canvas
        is={"div"}
        style={{
          width: "100%",
          minHeight: "35px",
        }}
        className={cx([
            className,
            "col"
        ])}
      >
      </Element>
  )
}

BootstrapCol.craft = {
  displayName: 'Col',
  props: {},
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: BootstrapColSettings,
  },
};

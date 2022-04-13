import { UserComponent, useNode, Canvas } from '@craftjs/core';
import cx from 'classnames';
import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { Element } from '@craftjs/core';
import { BootstrapContainerSettings } from './BootstrapContainerSettings';

type BootstrapContainerProps = {
    className?: string;
    children?: React.ReactNode;
};

// export const BContainer = 

export const BootstrapContainer: UserComponent<BootstrapContainerProps> = (props: any) => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  const { className, children, ...otherProps } = props;
  return (
    <Container ref={drag} id="drop_section" style={{ width: "100%" }} fluid>
      <Element
        id={"boostrap_container_" + Date.now().toString(36) + Math.random().toString(36).substr(2)}
        canvas
        is={"div"}
        style={{
          width: "100%",
          minHeight: "35px",
          border: "1px black dashed"
        }}
        className={cx([
            className,
        ])}
      >
      </Element>
    </Container>
  )
}

BootstrapContainer.craft = {
  displayName: 'Container',
  props: {},
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: BootstrapContainerSettings,
  },
};

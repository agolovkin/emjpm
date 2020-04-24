import PropTypes from 'prop-types';
import React from 'react';
import { Box, Button as RebassButton, Flex } from 'rebass';

import { Spinner } from '../Spinner';
import { buttonStyle } from './style';

const spinnerStyle = () => {
  return {
    left: '50%',
    ml: '-35px',
    position: 'absolute',
    right: '0',
  };
};

const content = (props) => {
  const { isLoading } = props;
  return {
    opacity: isLoading ? '0' : '1',
  };
};

const Button = (props) => {
  const { isLoading, children, renderIcon } = props;
  return (
    <RebassButton sx={buttonStyle} {...props}>
      {isLoading && (
        <Box sx={spinnerStyle}>
          <Spinner variant="bgLight" />
        </Box>
      )}
      <Flex alignItems="center" flexDirection="row" isLoading={isLoading} sx={content(props)}>
        {renderIcon && (<Box mr={2} height="20px" width="20px">{renderIcon()}</Box>)}
        <Box>{children}</Box>
      </Flex>
    </RebassButton>
  );
};

export { Button };

Button.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  renderIcon: PropTypes.func,
  variant: PropTypes.string,
};

Button.defaultProps = {
  isLoading: false,
  renderIcon: null,
  variant: null,
};

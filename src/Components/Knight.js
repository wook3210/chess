import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit,
    width: '100%',
    height: '100%',
  },
});

const Knight = ({ classes, handleSelect }) => (
  <SvgIcon
    onClick={e => {
      e.stopPropagation();
      handleSelect();
    }}
    viewBox="0 0 298 298"
    style={{ enableBackground: 'new 0 0 298 298' }}
    color="primary"
    className={classes.root}
  >
    <g>
      <path
        d="M210.952,116c14.912,0,27.037-12.088,27.037-27s-10.945-25.013-26.964-30.666c-11.333-4-18.018-10.823-23.009-19.412
		C183.025,30.333,172.025,17,157.525,17c-5.832,0-19.798,0-19.798,0V0c-107,40.03-72.369,184-72.369,184h21.369v14h-6.369
		c-4.418,0-8.631,3.582-8.631,8v1c0,3.289,2.302,6.111,5.14,7.341c-8.77,15.05-1.419,29.775,0.761,33.659h-5.271
		c-4.418,0-8.631,3.582-8.631,8v18c0,4.418,4,8,8,8v16h132v-16.069c4-0.493,7-3.853,7-7.931v-18c0-4.418-2.951-8-7.369-8h-4.27
		c2.181-3.884,8.902-18.609,0.13-33.659c2.838-1.23,4.508-4.052,4.508-7.341v-1c0-4.418-2.951-8-7.369-8h-7.631v-14h24.132
		c-16.501-54-66.334-83-66.334-83h40.182C191.146,109.889,200.351,116,210.952,116z"
      />
    </g>
  </SvgIcon>
);

Knight.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default withStyles(styles)(Knight);

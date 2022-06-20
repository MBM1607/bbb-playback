import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from 'components/utils/icon';
import { getAvatarStyle } from 'utils/data';
import './index.scss';

const propTypes = {
  circle: PropTypes.bool,
  icon: PropTypes.string,
  initials: PropTypes.string,
  name: PropTypes.string,
  pulse: PropTypes.bool
};

const defaultProps = {
  circle: false,
  icon: '',
  initials: '',
  name: '',
  pulse: false
};

const Avatar = ({
  circle,
  icon,
  initials,
  name,
  pulse
}) => {
  // TODO: this should become a property
  const style = initials.length > 0 ? getAvatarStyle(name) : 'avatar-default';

  return (
    <div className="avatar-wrapper">
      <div className={cx('avatar', { circle }, style)}>
        {
          pulse && (
            <span className='talking'></span>
          )
        }
        {icon ? (
          <Icon name={icon} />
        ) : (
          <span className={['initials', pulse ? 'show-mic' : ''].join(' ')}>
            {initials}
          </span>
        )}
      </div>
    </div>
  );
};

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;

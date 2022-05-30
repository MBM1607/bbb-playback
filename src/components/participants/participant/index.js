import Margin from 'components/chat/messages/margin';
import PropTypes from 'prop-types';
import React from 'react';
import { FormattedDate, FormattedTime } from 'react-intl';
import { getInitials } from 'utils/builder';


const propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  joined_at: PropTypes.instanceOf(Date)
};

const defaultProps = {
  name: '',
  role: '',
  joined_at: new Date()
};

const Participant = ({ name, role, joined_at }) => {
  return (
    <div
      id={`participant-${name}`}
    >
      <Margin
        active={true}
        circle={role === 'VIEWER'}
        icon={''}
        initials={getInitials(name)}
        name={name}
      />

      <div className='info'>
        <span className='name'>
          {name}
        </span>

        <span className='datetime' title='The time at which the user joined'>
          <span className='time'>
            <FormattedTime value={joined_at} />,
          </span>

          <div className='date'>
            <FormattedDate
              value={joined_at}
              day="numeric"
              month="long"
              year="numeric"
            />
          </div>
        </span>
      </div>
    </div>
  );
};

Participant.propTypes = propTypes;
Participant.defaultProps = defaultProps;

const areEqual = () => true;

export default React.memo(Participant, areEqual);

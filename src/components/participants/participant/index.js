import Margin from 'components/chat/messages/margin';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { EVENTS } from 'utils/constants';
import { FormattedDate, FormattedTime } from 'react-intl';
import { getInitials } from 'utils/builder';
import storage from 'utils/data/storage';


const propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  joinedAt: PropTypes.instanceOf(Date)
};

const defaultProps = {
  name: '',
  role: '',
  joinedAt: new Date(),
  userId: '',
  talkingEvents: []
};

const Participant = ({ name, role, joinedAt, userId, talkingEvents }) => {
  const {
    start
  } = storage.metadata;
  const [talking, setTalking] = useState(false);

  useEffect(() => {
    const handleTimeUpdate = (event) => {
      // Convert time to milliseconds before adding it to the timestamp
      const time = start + (event.detail.time * 1000);

      const passedEvents = talkingEvents.filter(event => event.timestamp <= time).sort(event => event.timestamp);

      if (passedEvents.length) {
        const latestEvent = passedEvents[0];
        setTalking(latestEvent.talking);
      }
      else {
        // Make sure talking is set to false when no events have fired
        talking && setTalking(false);
      }
    }

    document.addEventListener(EVENTS.TIME_UPDATE, handleTimeUpdate);
    return () => {
      document.removeEventListener(EVENTS.TIME_UPDATE, handleTimeUpdate);
    };
  }, [start, talking, talkingEvents]);

  return (
    <div id={userId}>
      <Margin
        active={true}
        circle={role === 'VIEWER'}
        initials={getInitials(name)}
        name={name}
        pulse={talking}
      />

      <div className='info'>
        <span className='name'>
          {name}
        </span>

        <span className='datetime' title='The time at which the user joined'>
          <span className='time'>
            <FormattedTime value={joinedAt} />,
          </span>

          <div className='date'>
            <FormattedDate
              value={joinedAt}
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

export default Participant;

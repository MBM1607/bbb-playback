import React from 'react';
import {
  defineMessages, useIntl
} from 'react-intl';
import {
  ID
} from 'utils/constants';
import storage from 'utils/data/storage';
import './index.scss';
import Participant from './participant';


const intlMessages = defineMessages({
  aria: {
    id: 'player.chat.wrapper.aria',
    description: 'Aria label for the chat wrapper',
  },
});

const Participants = () => {
  const intl = useIntl();

  return (
    <div
      aria-label={intl.formatMessage(intlMessages.aria)}
      className="participants-wrapper"
      id={ID.PARTICIPANTS}
      tabIndex="0"
    >
      <div className='list'>
        <div className='top'>
          Users ({storage.metadata.participants.length})
        </div>

        {
          storage.metadata.participants.map((participant, i) => (
            <Participant
              key={`participant-${participant.name}-${i}`}
              {...participant}
            />
          ))
        }
      </div>
    </div>
  );
};

const areEqual = () => true;

export default React.memo(Participants, areEqual);

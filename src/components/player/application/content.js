import React from 'react';
import Chat from 'components/chat';
import Notes from 'components/notes';
import Particpants from 'components/participants';
import { ID } from 'utils/constants';

const Content = ({ current }) => {
  switch (current) {
    case ID.CHAT:
      return <Chat />;
    case ID.NOTES:
      return <Notes />;
    case ID.PARTICIPANTS:
      return <Particpants />;
    default:
      return null;
  }
};

const areEqual = (prevProps, nextProps) => {
  if (prevProps.current !== nextProps.current) return false;

  return true;
};

export default React.memo(Content, areEqual);

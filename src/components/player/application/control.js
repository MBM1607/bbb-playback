import React from 'react';
import cx from 'classnames';
import Icon from 'components/utils/icon';
import { ID } from 'utils/constants';
import layout from 'utils/layout';
import './index.scss';

const APPLICATIONS = [
  ID.CHAT,
  ID.NOTES,
  ID.PARTICIPANTS
];

const Control = ({
  current,
  toggleApplication,
}) => {
  if (!layout.control) return null;

  return (
    <div className="application-control">
      {APPLICATIONS.map((application, i) => {
        const active = current === application;

        return (
          <div
            className={cx('application-icon', { inactive: !active })}
            onClick={() => active ? null : toggleApplication(application)}
            key={`application-icon-${application}`}
            id={`application-icon-${application}`}
          >
            <Icon
              name={application === ID.PARTICIPANTS ? 'users' : application}
            />
          </div>
        );
      })}
    </div>
  );
};

const areEqual = (prevProps, nextProps) => {
  return prevProps.current === nextProps.current;
};

export default React.memo(Control, areEqual);

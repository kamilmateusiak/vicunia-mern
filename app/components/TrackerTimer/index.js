import React from 'react';
import Container from './Container';

function TrackerTimer(props) {
  const { hours, minutes, seconds } = props.timer;

  return (
    <Container className="text-center">
      {hours > 9 ? hours : `0${hours}`} : {minutes > 9 ? minutes : `0${minutes}`} : {seconds > 9 ? seconds : `0${seconds}`}
    </Container>
  );
}

TrackerTimer.propTypes = {
  timer: React.PropTypes.object,
};

export default TrackerTimer;

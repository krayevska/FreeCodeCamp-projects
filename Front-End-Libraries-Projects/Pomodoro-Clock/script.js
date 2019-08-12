/*
Dependencies: React, ReactDOM, and 
Accurate_Interval.js by Squuege:
https://codepen.io/no_stack_dub_sack/pen/VKJGKd
*/

const projectName = 'pomodoro-clock';
class PomodoroClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: 'Session',
      startPauseMode: 'paused',
      workLength: 25,
      breakLength: 5,
      timeLeft: 1500,
      timerFunction: '',
      timerMode: 'off',
      startPauseModeColor: 'green',
      startPauseModeLabel: 'Start' };


    this.moreWork = this.moreWork.bind(this);
    this.lessWork = this.lessWork.bind(this);
    this.moreBreak = this.moreBreak.bind(this);
    this.lessBreak = this.lessBreak.bind(this);
    this.reset = this.reset.bind(this);
    this.startPause = this.startPause.bind(this);
    this.clockFormat = this.clockFormat.bind(this);
    this.ticking = this.ticking.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }

  clockFormat() {
    let m = Math.floor(this.state.timeLeft / 60);
    let s = this.state.timeLeft - m * 60;
    s = s < 10 ? '0' + s : s;
    m = m < 10 ? '0' + m : m;
    return m + ':' + s;
  }

  startTimer() {
    this.setState({
      timerMode: 'on',
      timerFunction: accurateInterval(() => {
        this.ticking();
      }, 1000) });
  }

  ticking() {
    let audio = document.getElementById("beep");
    if (this.state.label == 'Session' && this.state.timeLeft > 0) {
      this.setState({ timeLeft: this.state.timeLeft - 1 });
    } else
    if (this.state.label == 'Session' && this.state.timeLeft == 0) {
      this.setState({
        label: 'Break',
        timeLeft: this.state.breakLength * 60 });

      audio.play();
    } else
    if (this.state.label == 'Break' && this.state.timeLeft > 0) {
      this.setState({ timeLeft: this.state.timeLeft - 1 });
    } else
    if (this.state.label == 'Break' && this.state.timeLeft == 0) {
      this.state.timerFunction && this.state.timerFunction.cancel();
      this.setState({
        label: 'Session',
        timeLeft: 1500,
        workLength: 25,
        breakLength: 5,
        timerMode: 'off',
        timerFunction: '' });


      audio.play();
      this.startTimer();
    }}

  moreWork() {
    if (this.state.workLength < 60 && this.state.timerMode == 'off') {
      this.setState({
        workLength: this.state.workLength + 1,
        timeLeft: this.state.timeLeft + 60 });

    }}

  lessWork() {
    if (this.state.workLength > 1 && this.state.timerMode == 'off') {
      this.setState({
        workLength: this.state.workLength - 1,
        timeLeft: this.state.timeLeft - 60 });

    }}

  lessBreak() {
    if (this.state.breakLength > 1 && this.state.timerMode == 'off') {
      this.setState({
        breakLength: this.state.breakLength - 1 });

    }}

  moreBreak() {
    if (this.state.breakLength < 60 && this.state.timerMode == 'off') {
      this.setState({
        breakLength: this.state.breakLength + 1 });

    }}

  reset() {
    let audio = document.getElementById("beep");
    this.setState({
      label: 'Session',
      workLength: 25,
      breakLength: 5,
      timeLeft: 1500,
      startPauseMode: 'paused',
      timerFunction: '',
      timerMode: 'off',
      startPauseModeColor: 'green',
      startPauseModeLabel: 'Start' });

    this.state.timerFunction && this.state.timerFunction.cancel();
    audio.pause();
    audio.currentTime = 0;
  }

  startPause() {
    if (this.state.startPauseMode == 'paused' || this.state.timerMode == 'off') {
      this.startTimer();
      this.setState({
        startPauseMode: 'started',
        startPauseModeColor: 'red',
        startPauseModeLabel: 'Pause' });

    } else
    if (this.state.startPauseMode == 'started') {
      this.state.timerFunction && this.state.timerFunction.cancel();
      this.setState({
        startPauseMode: 'paused',
        startPauseModeColor: 'green',
        startPauseModeLabel: 'Start' });
    }
  }

  render() {
    return (
      React.createElement("div", { className: "grid-container" },
      React.createElement(Header, { label: this.state.label }),
      React.createElement(SessionLabel, { lengthM: this.state.workLength,
        onClickMoreWork: this.moreWork,
        onClickLessWork: this.lessWork }),


      React.createElement(Timer, { startPause: this.startPause,
        reset: this.reset,
        clockFormat: this.clockFormat(),
        startPauseColor: this.state.startPauseModeColor,
        startPauseLabel: this.state.startPauseModeLabel }),


      React.createElement(BreakLabel, { lengthM: this.state.breakLength,
        onClickMoreBreak: this.moreBreak,
        onClickLessBreak: this.lessBreak }),
      React.createElement(Footer, null)));


  }}


class Header extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "firstRow container" },
      React.createElement("div", { className: "appNames" }, "Pomodoro Clock"),
      React.createElement("div", null, React.createElement("h3", { id: "timer-label" }, this.props.label))));

  }}


class SessionLabel extends React.Component {
  render() {
    return (
      React.createElement("div", { id: "session-label", class: "changeItem container changeItemWork" }, "Time of work",

      React.createElement("br", null),
      React.createElement("button", { className: "change plus", id: "session-increment", onClick: this.props.onClickMoreWork }, "+"),
      React.createElement("span", { id: "session-length" }, this.props.lengthM),
      React.createElement("button", { className: "change minus", id: "session-decrement", onClick: this.props.onClickLessWork }, "-")));

  }}


class Timer extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "timerItem" },
      React.createElement("div", { id: "pomodoro-app" },
      React.createElement("div", { className: "container" },
      React.createElement("div", { id: "timer" },
      React.createElement("div", { id: "time-left", class: "time" },
      this.props.clockFormat)),


      React.createElement("br", null),
      React.createElement("div", { class: "buttons" },
      React.createElement("button", { id: "start_stop", onClick: this.props.startPause, style: { backgroundColor: this.props.startPauseColor } }, this.props.startPauseLabel),
      React.createElement("button", { id: "reset", onClick: this.props.reset }, "Reset"))))));




  }}


class BreakLabel extends React.Component {
  render() {
    return (
      React.createElement("div", { id: "break-label", class: "changeItem container changeItemBreak" }, "Time of break",

      React.createElement("br", null),
      React.createElement("button", { className: "change plus", id: "break-increment", onClick: this.props.onClickMoreBreak }, "+"),
      React.createElement("span", { id: "break-length" }, this.props.lengthM),
      React.createElement("button", { className: "change minus", id: "break-decrement", onClick: this.props.onClickLessBreak }, "-")));

  }}


class Footer extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "lastRow container" },
      React.createElement("div", null, React.createElement("div", null, "freecodecamp.org advanced front end development project#2", React.createElement("br", null), " by", React.createElement("a", { href: "https://codepen.io/krayevska/", target: "_blank" }, " krayevska"),
      React.createElement("br", null), "more about ",
      React.createElement("a", { href: "https://en.wikipedia.org/wiki/Pomodoro_Technique", target: "_blank" }, "pomodoro technique"))),



      React.createElement("div", null,
      React.createElement("audio", { id: "beep", preload: "auto",
        src: "https://goo.gl/65cBl1",
        ref: audio => {this.audioBeep = audio;} }))));


  }}


ReactDOM.render(React.createElement(PomodoroClock, null), document.getElementById('root'));
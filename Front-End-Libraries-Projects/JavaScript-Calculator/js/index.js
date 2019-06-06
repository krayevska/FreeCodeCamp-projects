const projectName = 'javascript-calculator',
equalsStyle = {
  background: '#489037',
  position: 'absolute',
  height: 130,
  bottom: 5 },

clearStyle = {
  background: '#ac3939',
  width: 160 },

zeroStyle = {
  width: 160 };


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expression: '0',
      current: '0',
      previous: '',
      lastInput: '',
      evaluated: false };

    this.evaluate = this.evaluate.bind(this);
    this.clear = this.clear.bind(this);
    this.numbers = this.numbers.bind(this);
    this.operators = this.operators.bind(this);
    this.maxDigit = this.maxDigit.bind(this);
    this.decimal = this.decimal.bind(this);
  }

  maxDigit() {
    this.setState({
      expression: 'Digit Limit Met' });

  }

  numbers(e) {
    if (this.state.expression !== 'Digit Limit Met') {
      let currentExpression = this.state.expression;
      if (currentExpression.length > 21) this.maxDigit();else
      {
        currentExpression = currentExpression === '0' ? e.target.value : currentExpression + e.target.value;
        if (this.state.lastInput === '.') {
          this.setState({
            expression: currentExpression,
            lastInput: e.target.value,
            current: this.state.current + e.target.value });

        } else
        if (/[+-/x]/.test(this.state.lastInput)) {
          this.setState({
            expression: currentExpression,
            lastInput: e.target.value,
            current: e.target.value });

        } else
        {
          this.setState({
            expression: currentExpression,
            lastInput: e.target.value,
            current: this.state.current === '0' ? e.target.value : this.state.current + e.target.value });

        }}}}

  operators(e) {
    if (this.state.expression !== 'Digit Limit Met') {
      let currentExpression = this.state.expression;
      if (/[+-/x]/.test(this.state.lastInput)) {
        this.setState({
          expression: this.state.expression.slice(0, this.state.expression.length - 1) + e.target.value,
          lastInput: e.target.value,
          current: e.target.value });

      } else
      {
        if (this.state.expression.includes('=')) {
          this.setState({
            expression: this.state.previous + e.target.value,
            lastInput: e.target.value,
            previous: this.state.current,
            current: e.target.value });

        } else
        {
          currentExpression += e.target.value;
          this.setState({
            expression: currentExpression,
            lastInput: e.target.value,
            current: e.target.value });

        }
      }}
  }

  evaluate() {
    let currentExpression = this.state.expression;
    currentExpression = currentExpression.replace(/x/g, "*");
    let answer = eval(currentExpression);
    this.setState({
      expression: currentExpression + '=' + answer.toString(),
      current: answer.toString(),
      lastInput: '=',
      previous: answer.toString(),
      evaluated: true });

  }

  clear() {
    this.setState({
      expression: '0',
      current: '0',
      previous: '',
      lastInput: '',
      evaluated: false });

  }

  decimal() {
    console.log('evaluated? ' + this.state.evaluated);
    if (this.state.evaluated === true) {
      this.setState({
        expression: '0.',
        current: '0.',
        evaluated: false,
        lastInput: '' });

    } else
    {
      if (!this.state.current.includes('.')) {
        let current = this.state.current;
        console.log('this current before adding . = ' + this.state.current);
        current = this.state.current === '0' ? '0.' : this.state.current + '.';
        this.setState({
          expression: this.state.expression + '.',
          lastInput: '.',
          current: this.state.current === '0' ? current : this.state.current + '.' });

        console.log('this current before adding . = ' + this.state.current);
      }}}

  render() {
    return (
      React.createElement("div", null,
      React.createElement("div", { className: "calculator" },
      React.createElement(Expression, { expression: this.state.expression }),
      React.createElement(Result, { result: this.state.current }),
      React.createElement(Calculator, { numbers: this.numbers,
        clear: this.clear,
        operators: this.operators,
        evaluate: this.evaluate,
        decimal: this.decimal })),


      React.createElement("br", null),
      React.createElement("div", { id: "codedBy" }, " JavaScript Calculator. ", React.createElement("br", null), " (FreeCodeCamp Front End Libraries Projects) ", React.createElement("br", null), " designed and coded by",
      React.createElement("a", { target: "_blank", href: "https://codepen.io/krayevska" }, "Olga Krayevska"))));





  }}

class Calculator extends React.Component {

  render() {
    return (
      React.createElement("div", null,
      React.createElement("div", { className: "keys" },
      React.createElement("button", { id: "clear", value: "AC", onClick: this.props.clear, style: clearStyle }, "AC"),
      React.createElement("button", { id: "add", value: "+", onClick: this.props.operators }, "+"),
      React.createElement("button", { id: "subtract", value: "-", onClick: this.props.operators }, "-"),
      React.createElement("button", { id: "seven", value: "7", onClick: this.props.numbers }, "7"),
      React.createElement("button", { id: "eight", value: "8", onClick: this.props.numbers }, "8"),
      React.createElement("button", { id: "nine", value: "9", onClick: this.props.numbers }, "9"),
      React.createElement("button", { id: "divide", value: "/", onClick: this.props.operators }, "/"),
      React.createElement("button", { id: "four", value: "4", onClick: this.props.numbers }, "4"),
      React.createElement("button", { id: "five", value: "5", onClick: this.props.numbers }, "5"),
      React.createElement("button", { id: "six", value: "6", onClick: this.props.numbers }, "6"),
      React.createElement("button", { id: "multiply", value: "x", onClick: this.props.operators }, "x"),
      React.createElement("button", { id: "one", value: "1", onClick: this.props.numbers }, "1"),
      React.createElement("button", { id: "two", value: "2", onClick: this.props.numbers }, "2"),
      React.createElement("button", { id: "three", value: "3", onClick: this.props.numbers }, "3"),
      React.createElement("button", { id: "equals", value: "=", onClick: this.props.evaluate, style: equalsStyle }, "="),
      React.createElement("button", { id: "zero", value: "0", onClick: this.props.numbers, style: zeroStyle }, "0"),
      React.createElement("button", { id: "decimal", value: ".", onClick: this.props.decimal }, "."))));



  }}

class Result extends React.Component {
  render() {
    return React.createElement("div", { id: "display" }, this.props.result);
  }}
;

class Expression extends React.Component {
  render() {
    return React.createElement("div", { id: "expressionDisplay" }, this.props.expression);
  }}
;

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
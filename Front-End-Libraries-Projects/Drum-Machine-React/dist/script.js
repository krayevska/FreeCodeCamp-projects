const renderer = new marked.Renderer();

renderer.link = function (href, title, text) {
  const link = marked.Renderer.prototype.link.call(this, href, title, text);
  return link.replace("<a", "<a target='_blank' ");
};

marked.setOptions({
  breaks: true,
  renderer: renderer,
  sanitize: true });



class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: placeholder };

    this.getInput = this.getInput.bind(this);
    this.convertToMarkdown = this.convertToMarkdown.bind(this);
  }

  convertToMarkdown() {
    let mrkdn = marked(this.state.input);
    return { __html: mrkdn };
  }

  getInput(e) {
    let newInput = e.target.value;
    this.setState({ input: newInput });
  }

  render() {
    return (
      React.createElement("div", { className: "container" },
      React.createElement("div", { className: "box" },
      React.createElement("h2", null, "Markdown:"),
      React.createElement("textarea", { id: "editor",
        value: this.state.input,
        onChange: this.getInput })),


      React.createElement("div", { className: "box" },
      React.createElement("h2", null, "Preview:"),
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: this.convertToMarkdown() }))));



  }}



const placeholder =
`# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
    
  Heres some code, \`<div></div>\`, between 2 backticks.

  \`\`\`
  // this is multi-line code:

  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
    
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.

  There's also [links](https://www.freecodecamp.com), and
   > Block Quotes!

  And if you want to get really crazy, even tables:

  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | ------------- 
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.

  - And of course there are lists.
    - Some are bulleted.
        - With different indentation levels.
          - That look like this.


  1. And there are numbererd lists too.
  1. Use just 1s if you want! 
  1. But the list goes on...
  - Even if you use dashes or asterisks.
  * And last but not least, let's not forget embedded images:

  ![React Logo w/ Text](https://goo.gl/Umyytc)
  `;

ReactDOM.render(React.createElement(MarkdownPreviewer, null), document.getElementById('MarkdownPreviewer'));
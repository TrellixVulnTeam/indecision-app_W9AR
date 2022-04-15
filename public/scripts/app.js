'use strict';

var appData = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of computer',
  options: []
};
var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  console.log("form");

  var option = e.target.elements.options.value;

  if (option) {
    appData.options.push(option);
    e.target.elements.options.value = '';
    renderApp();
    console.log(appData.options);
  }
};
var rmvClick = function rmvClick() {
  appData.options = [];
  renderApp();
};
var makeDecision = function makeDecision() {
  var randomNum = Math.floor(Math.random() * appData.options.length);
  var op = appData.options[randomNum];
  alert(op);
};
var renderApp = function renderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      appData.title
    ),
    appData.subtitle && React.createElement(
      'p',
      null,
      appData.subtitle
    ),
    React.createElement(
      'p',
      null,
      ' ',
      appData.options.length > 0 ? "here are options" : "No options"
    ),
    React.createElement(
      'p',
      null,
      appData.options.length
    ),
    React.createElement(
      'ol',
      null,
      appData.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'button',
      { disabled: appData.options.length === 0, onClick: makeDecision },
      'What should I do'
    ),
    React.createElement(
      'button',
      { onClick: rmvClick },
      'Romove All'
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'options' }),
      React.createElement(
        'button',
        null,
        'Add option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');
renderApp();

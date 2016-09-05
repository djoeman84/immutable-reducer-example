import React, { Component, PropTypes } from 'react';
import { listOf } from 'react-immutable-proptypes';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions';
import { Todo } from '../models/todo';
import 'todomvc-app-css/index.css';

class AppView extends Component {
  render() {
    const { todos, actions } = this.props;
    return (
        <div>
          <Header addTodo={actions.addTodo} />
          <MainSection todos={todos} actions={actions} />
        </div>
    )
  }
}

AppView.propTypes = {
  todos: listOf(PropTypes.instanceOf(Todo)).isRequired,
  actions: PropTypes.object.isRequired
};

export const App = connect(
    (state) => ({
      todos: state.todos.todos
    }),
    (dispatch) => ({
      actions: bindActionCreators(TodoActions, dispatch)
    })
)(AppView);

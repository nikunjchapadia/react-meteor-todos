// App component - represents the whole app
App = React.createClass({

  // mixin makex the getMeteorData method works
  mixins : [ReactMeteorData],

  // load data from Tasks collections and puts them on this.data.tasks
  getMeteorData(){
    return {
      tasks : Tasks.find({}).fetch()
    }
  },

  renderTasks(){
    return this.data.tasks.map((task) => {
      return <Task key={task._id} task={task} />;
    });
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
});

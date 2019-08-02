import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos:[
        {
          id:1,
          content:'help mum pack',
          priority:'important'
        }
      ]
    }
  }

  render(){
    return(

      <div className="wrapper">
        <div className="todo">
          Todo
        </div>
        <form className="form-group-body">
          <div className="form-group">
          <input onChange={this.handleContentInputChange} id="content-input" type="text" className="add" placeholder="Add new item"/>
          </div>
          <div className="form-group">
          <input onChange={this.handlePriorityInputChange} id="priority-input" type="text" className="add" placeholder="Priority"/>
          </div>
          <button>Add</button>
      </form>
      <div>

        {
          this.state.todos.map((todos)=>{
            return(
              
              <div className="item">
                <div className="content"></div>
                <div className="priority"></div>
              </div>

            )
          })
        }
      </div>
      </div>

    );
  }
}

export default App;

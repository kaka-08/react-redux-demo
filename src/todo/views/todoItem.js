import React, {PropTypes,Component} from 'react';

class TodoItem extends Component{
   constructor(props){
     super(props)
   }
   

   render(){
    const checkedProp = this.props.completed ? {checked: true} : {};
    return(
      <li
            className="todo-item"
            style={{
              textDecoration: this.props.completed ? 'line-through' : 'none'
            }}
          >
            <input className="toggle" type="checkbox" {...checkedProp} readOnly onClick={this.props.onToggle} />
            <label className="text">{this.props.text}</label>
            <button className="remove" onClick={this.props.onRemove}>×</button>
          </li>
      )
   }

}


TodoItem.propTypes = {
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default TodoItem;
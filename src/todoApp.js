import React,{ Component } from "react";
import Todos from "./todo/views/todos";
import Filter from "./filter/views/filter";


class TodoApp extends Component{

	render(){
		return(
			<div>
	            <Todos />
	            <Filter />
	         </div>
		)
	}
}

export default TodoApp;
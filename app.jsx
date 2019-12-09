
class GroceryList extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<GroceryItem name={this.props.name[0]} />
				<GroceryItem name={this.props.name[1]}/>
		  	</div>
			
		)
	}

}
class GroceryItem extends React.Component {
	
	constructor(props){
		super(props)
		this.state = {
			done: false
		};
	}

	func(){
		this.setState({
			done: !this.state.done
		})
	}

	render() {
		var style = {
			textDecoration: this.state.done? 'line-through' : 'none'
		}
		return(
			<li style={style} onClick={this.func.bind(this)}>{this.props.name}</li>
			)
	}
}

var item = ["orange","Apple"]
ReactDOM.render(
	<GroceryList name={item}/>,
	document.getElementById('app')
)


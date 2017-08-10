import React,{Component} from 'react';
import '../css/li.css'
class Li extends Component{
  render(){
    return (
      <li>
        <p>{this.props.txt}</p>
      </li>
    )
  }
}
export default Li;

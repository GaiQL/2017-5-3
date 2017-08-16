import React,{Component} from "react";
class LiModel extends Component{
  changeChecked = () => {
    this.props.PchangeChecked(this.props.id);
    // console.log(this.props.id);
  }
  render(){
    let {txt,checked} = this.props;
    let sClass = checked?'completed':'';
    // console.log(checked)
    return (
      <li className={sClass}>
          <div className="view">
              <input
                className="toggle"
                type="checkbox"
                onChange = {this.changeChecked}
                checked={checked}
              />
              <label>{txt}</label>
              <button className="destroy"></button>
          </div>
      </li>
    )
  }
}
export default LiModel;

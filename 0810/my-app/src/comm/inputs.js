import React,{Component} from 'react';

/*
    react 中的表单：
      受限与非受限

        受限：只要是表单元素加了默认值为受限组件，默认值是根据状态来修改的，只要状态不改
              那么里面的值就不会变。
          select
          checkbox
          radio
          textarea
        只要更改表单元素可以通用onChange

        受限组件如何解决？
        1、绑onChange事件

        2、defaultValue/defaultChecked
          在表单元素身上加了defaultValue之后，表单元素不再是受限组件

        //defaultValue和就是解决value的受限问题


*/
class inputs extends Component{
  constructor(){
    super()
    this.state = {
      //初始化数据
      val:'',
    }
  }
  changeVal = (ev) =>{
    console.log(ev.target.value)
    this.setState({
      val:ev.target.value
    },()=>{
      //当渲染完成之后的回调
      console.log(this.state.val)
    })
  }
  render(){
    return(
      <div>
        <span>1</span>
        <input type="text" onChangeVal={this.ChangeVal} value={this.state.val} />
      </div>
    )
  }
}
export default inputs;

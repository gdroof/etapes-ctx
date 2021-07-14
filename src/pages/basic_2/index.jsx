import React from 'react'

const toLearn = ['react', 'vue', 'webpack', 'nodejs']
const TextComponent = () => <div> hello , i am function component </div>

class Basic_2 extends React.Component {
  status = false /* 状态 */
  renderFoot = () => <div> i am foot</div>

  controlRender = () => {
    const reactElement = (
      <div style={{ marginTop: '100px' }}   >
        { /* element 元素类型 */}
        <div>hello,world</div>
        { /* fragment 类型 */}
        <React.Fragment>
          <div> 👽👽 </div>
        </React.Fragment>
        { /* text 文本类型 */}
        my name is alien
        { /* 数组节点类型 */}
        {toLearn.map(item => <div key={item} >let us learn {item} </div>)}
        { /* 组件类型 */}
        <TextComponent />
        { /* 三元运算 */}
        {this.status ? <TextComponent /> : <div>三元运算</div>}
        { /* 函数执行 */}
        {this.renderFoot()}
        <button onClick={() => console.log(this.render())} >打印render后的内容</button>
      </div>
    )
    console.log(reactElement)
    const { children } = reactElement.props
    const flatChildren = React.Children.toArray(children)
    console.log('flatChildren', flatChildren)
    const newChildren = []
    React.Children.forEach(flatChildren, (item) => {
      if (React.isValidElement(item)) {
        newChildren.push(item)
      }
    })
    const lastChildren = React.createElement('div', { props: { className: 'last' } }, 'say goodbye')
    newChildren.push(lastChildren)
    console.log('newChildren', newChildren)
    const newReactElement = React.cloneElement(reactElement, {}, ...newChildren)
    console.log('reactElement', reactElement)
    console.log('newReactElement', newReactElement)
    return newReactElement
  }

  render() {
    return this.controlRender()
  }
}

export default Basic_2
import React from 'react'
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile'
import AvatarSelector from '../../component/avatar-selector/avatar-selector'
import { connect } from 'react-redux'
import { update } from '../../redux/user.redux'
import { Redirect } from 'react-router-dom'

@connect(
  state => state.user,
  { update }
)
class BossInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      desc: '',
      company: '',
      money: ''
    }
  }
  onChange(key, val) {
    this.setState({
      [key]: val
    })
  }
  render() {
    const path = this.props.location.pathname
    const redirect = this.props.redirectTo
    return (
      <div>
        {redirect && redirect !== path ? <Redirect to={this.props.redirectTo}></Redirect> : null}
        <NavBar mode="dark">BOSS的完善信息页面</NavBar>
        <AvatarSelector selectAvatar={img => { this.setState({ avatar: img }) }}></AvatarSelector>
        <InputItem onChange={val => this.onChange('title', val)}>
          招聘职位
        </InputItem>
        <InputItem onChange={val => this.onChange('company', val)}>
          公司名称
        </InputItem>
        <InputItem onChange={val => this.onChange('money', val)}>
          职位薪资
        </InputItem>
        <TextareaItem onChange={val => this.onChange('desc', val)} rows={3} autoHeight title='职位要求' />
        <Button onClick={() => { this.props.update(this.state) }} type='primary'>保存</Button>
      </div>
    )
  }
}

export default BossInfo

import { connect } from 'react-redux'
import {ThunkDispatch} from 'redux-thunk'
import React, { useState, ChangeEvent } from 'react'

import { ApplicationState } from './store'
import { count } from './actions'

interface DispatchProps {
  count: typeof count
}

interface StateProps {
  sum: number,
  clickCount: number,
}

interface Props extends DispatchProps, StateProps {}

const Counter1 = (props: Props) => {

  const [amount, setAmount] = useState(0)

  const count = () => {
    props.count(amount)
  }

  const handleSettingAmount = (event: ChangeEvent<any>) => {
    const amountToAdd = event.target.value
    setAmount(Number(amountToAdd))
  }

  return (
    <div>
      <input onChange={handleSettingAmount} type="number" />
      <button onClick={count}>Add</button>
      <div>{`Clicked ${props.clickCount} times`}</div>
      <div>Sum: {props.sum}</div>
    </div>
  )
}

const mapStateToProps = ({counter}: ApplicationState) => {
  return {
    sum: counter.sum,
    clickCount: counter.count
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
  count: (amountToAdd: number) => dispatch(count(amountToAdd))
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter1)
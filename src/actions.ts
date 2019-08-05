import { ThunkAction } from 'redux-thunk'

export interface IncreaseSumAction {
  type: 'INCREASE_AMOUNT'
  amount: number
}

export interface IncreaseCountAction {
  type: 'INCREASE_COUNT'
}

const increaseAmount = (amount: number): IncreaseSumAction => (
  { type: 'INCREASE_AMOUNT', amount }
)

const increaseCount = (): IncreaseCountAction => (
  { type: 'INCREASE_COUNT' }
)

interface CountThunk {
  (amount: number): ThunkAction<Promise<void>, {}, {}, IncreaseSumAction | IncreaseCountAction>
}

export const count: CountThunk = (amount) => async (dispatch) => {
  dispatch(increaseAmount(amount))
  dispatch(increaseCount())
}
  

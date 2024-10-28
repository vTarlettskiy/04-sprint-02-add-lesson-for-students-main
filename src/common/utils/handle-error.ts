import { Dispatch } from 'redux'
import { AxiosError, isAxiosError } from 'axios'
import { setErrorAC } from '../../app/app-reducer.ts'

export const handleError = (error: unknown, dispatch: Dispatch) => {
  let errorMessage: string

  if (isAxiosError<ServerError>(error)) {
    errorMessage = error.response ? error.response.data.errorMessages[0].message : error.message
  } else {
    errorMessage = (error as unknown as Error).message
  }
  dispatch(setErrorAC(errorMessage))
}

type ServerError = {
  errorMessages: Array<{ field: string; message: string }>
}
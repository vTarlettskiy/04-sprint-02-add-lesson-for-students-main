import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { handleError } from '../../common/utils/handle-error.ts'
import { useAppDispatch, useAppSelector } from '../store.ts'
import { selectAppError } from '../app-selectors.ts'
import { setErrorAC } from '../app-reducer.ts'

export const GlobalError = () => {

  const errorMessage = useAppSelector(selectAppError)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage)
      dispatch(setErrorAC(null))
    }
  }, [errorMessage])

  return <ToastContainer theme="dark" autoClose={3000} />
}

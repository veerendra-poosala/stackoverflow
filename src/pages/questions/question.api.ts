import { get } from '../api/interceptor'
import { store } from '@/store/store'
import { onFetchQuestions, isLoading } from './question.slice'
import { questionsData } from '@/components/question/data'

const { dispatch } = store
const host = `${process.env.NEXT_PUBLIC_STACK_API}`

export const listQuestions = async (query?: string) => {
  try {
    // const res: any = await get(`${host}?${query}`)
    const res = questionsData;
    dispatch(onFetchQuestions(res.items))
    return res.items
  } catch (error) {
    console.log('error', error)
  } finally {
    dispatch(isLoading())
  }
}

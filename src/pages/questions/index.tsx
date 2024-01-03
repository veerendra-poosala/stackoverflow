import { RootState, store } from '@/store/store'
import { NextPageWithLayout } from '../page'
import { listQuestions } from '../../components/question/question.api'
import { useEffect } from 'react'
import QuestionSortOptions from '@/components/question/QuestionSortOptions'
import { useSelector, useDispatch } from 'react-redux'
import { initialFilter } from '@/components/question/QuestionSortOptions'
import { useState } from 'react'
import EachQuestion from '@/components/question/EachQuestion'
import { QuestionType } from '../../components/question/question.interface'
import { onFetchQuestions } from '../../components/question/question.slice'

const Question: NextPageWithLayout = () => {
  const dispatch = useDispatch()
  const questionsData = useSelector((state: RootState) => state.question)
  const { isLoading, questionData } = questionsData

  const queryStringFun = (newFilterValue: any) => {
    let queryString = ''
    Object.keys(newFilterValue).map((v) =>
      newFilterValue[v] !== ''
        ? (queryString += `&${v}=${newFilterValue[v]}`)
        : '',
    )
    return queryString.replace('&', '')
  }

  useEffect(() => {
    const fetchQuestions = async () => {
      const newQuestionsData = await listQuestions(
        queryStringFun(initialFilter),
      )
      if (newQuestionsData) {
        dispatch(onFetchQuestions(newQuestionsData))
      }
    }

    if (isLoading) {
      fetchQuestions()
    }
  }, [dispatch, isLoading])

  return (
    <>
      <div className="p-2 w-full shadow-sm">
        <div className="pb-0 mb-0">
          <h3 className="text-[5rem] text-[#f2f2f2]  pl-6">top</h3>
          <h3 className="font-[600] text-[1rem] relative pl-6 left-2  bottom-[3.8rem]">
            Questions
          </h3>
        </div>
        <div className="pl-4">
          <QuestionSortOptions />
        </div>
      </div>
      <div className="w-full">
        <ul>
          {questionData?.map((item: QuestionType) => (
            <EachQuestion 
              link={item?.link} 
              key={item?.question_id} 
              title={item?.title}
            
              />
          ))}
        </ul>
      </div>
    </>
  )
}

export default Question

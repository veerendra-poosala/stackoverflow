import { RootState, store } from '@/store/store'
import { NextPageWithLayout } from '../page'
import { listQuestions } from '../../components/question/question.api'
import React, { useEffect } from 'react'
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
            <React.Fragment key={`${item?.title}-${Date.now().toLocaleString()}`}>
              <EachQuestion 
                tags = {item?.tags}
                owner = {item?.owner}
                is_answered = {item?.is_answered}
                view_count = {item?.view_count}
                favorite_count = {item?.favorite_count}
                down_vote_count = {item?.down_vote_count}
                up_vote_count = {item?.up_vote_count}
                answer_count = {item?.answer_count}
                score = {item?.answer_count}
                last_activity_date = {item?.last_activity_date}
                creation_date = {item?.creation_date}
                last_edit_date = {item?.last_edit_date}
                question_id = {item?.question_id}
                link = {item?.link}
                title = {item?.title}
                body = {item?.body}
                content_license = {item?.content_license}
                accepted_answer_id = {item?.accepted_answer_id}
                closed_date = {item?.closed_date}
                closed_reason = {item?.closed_reason}
                />
              </React.Fragment>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Question

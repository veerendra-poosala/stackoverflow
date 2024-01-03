import { listQuestions } from './question.api'
import { onFetchQuestions } from './question.slice'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'

interface QuestionSortType {
  title: string
  value: string
  records?: number
}

const questionSortingTypes: QuestionSortType[] = [
  {
    title: 'interesting',
    value: 'activity',
    records: 0,
  },
  {
    title: 'featured',
    value: 'votes',
    records: 0,
  },
  {
    title: 'hot',
    value: 'hot',
    records: 0,
  },
  {
    title: 'week',
    value: 'week',
    records: 0,
  },
  {
    title: 'month',
    value: 'month',
    records: 0,
  },
]

export interface InitialFilter {
  site: string
  order?: string
  sort?: string
  pagesize?: number
  page?: number
}

export const initialFilter: InitialFilter = {
  site: 'stackoverflow',
  order: 'desc',
  sort: 'activity',
  pagesize: 50,
  page: 1,
}

const QuestionSortOptions = () => {
  const [activeSortOption, setActiveSortOption] = useState('interesting')
  const [filter, setFilter] = useState(initialFilter)

  const dispatch = useDispatch()

  const questionsData = useSelector((state: RootState) => state.question)
  const { isLoading } = questionsData

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
  }, [dispatch, isLoading, activeSortOption])

  const queryStringFun = (newFilterValue: any) => {
    let queryString = ''
    Object.keys(newFilterValue).map((v) =>
      newFilterValue[v] !== ''
        ? (queryString += `&${v}=${newFilterValue[v]}`)
        : '',
    )
    return queryString.replace('&', '')
  }

  const changeFilter = async (keyname: string, value: string | number) => {
    let newFilterValue = { ...filter, [keyname]: value }
    setFilter(newFilterValue)
    let queryString = queryStringFun(newFilterValue)
    await listQuestions(queryString)
    return
  }

  return (
    <div className="w-full">
      <ul className="w-flull flex flex-row items-center">
        {questionSortingTypes.map((item) => (
          <li key={item.title} className="list-none">
            <button
              className={activeSortOption === item.title ? 'active-button' : ''}
              onClick={() => {
                changeFilter('sort', item.value)
                setActiveSortOption(item.title)
              }}
            >
              <p
                className={activeSortOption === item.title ? 'text-white' : ''}
              >
                {item.title}
                {/* eslint-disable-next-line react/no-danger */}
                <span
                  className={
                    item && item.records && item?.records > 0
                      ? 'visible'
                      : 'hidden'
                  }
                >
                  {item?.records}
                </span>
              </p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default QuestionSortOptions

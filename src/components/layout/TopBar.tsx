import { IoIosMenu } from 'react-icons/io'
import { IoSearch } from 'react-icons/io5'
import { SlGlobe } from 'react-icons/sl'
import { HiMiniComputerDesktop } from 'react-icons/hi2'
import { IoChevronDown } from 'react-icons/io5'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { onFetchQuestions } from '@/pages/questions/question.slice'

const initialFilter = {
  order: 'desc',
  sort: 'activity',
  site: 'stackoverflow',
  pagesize: '50',
  page: '1',
}

const TopBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchText, setSearchText] = useState('')

  const dispatch = useDispatch()
  const questionsData = useSelector((state: RootState) => state.question)
  const { questionData } = questionsData

  useEffect(() => {
    if (searchText?.trim() === '') {
      dispatch(onFetchQuestions(questionData))
      return
    }

    const formattedSearchText = searchText.toLowerCase()

    const filteredQuestions = questionData?.filter(
      (q: any) =>
        q.title?.toLowerCase().includes(formattedSearchText) ||
        q.body?.toLowerCase().includes(formattedSearchText),
    )

    dispatch(onFetchQuestions(filteredQuestions))
  }, [searchText, questionData, dispatch])

  return (
    <>
      <div className="flex flex-row justify-between shadow-sm rounded-sm items-center w-[100%] p-[1rem] py-[2rem]">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col mr-[4rem] cursor-pointer">
            <IoIosMenu className="text-[#a6a6a6]" size={24} />
          </div>
          <div className="flex flex-row items-center">
            <label htmlFor="search">
              <IoSearch
                size={14}
                className="mr-2 self-center cursor-pointer text-[#a6a6a6]"
              />
            </label>
            <input
              type="search"
              className="text-[1rem] font-normal leading-[150%] border-none outline-none pl-2 pb-1 self-center text-[#a6a6a6]"
              placeholder="search"
              id="search"
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center mr-5 cursor-pointer">
            <SlGlobe size={14} className="text-[#a6a6a6] mr-[0.25rem]" />
            <h3>Help</h3>
          </div>
          <div className="flex flex-row items-center mr-5 cursor-pointer">
            <HiMiniComputerDesktop
              size={14}
              className="text-[#a6a6a6] mr-[0.25rem]"
            />
            <h3>Tour</h3>
          </div>
          <div className="flex flex-row items-center mr-3 cursor-pointer">
            <Image
              className="mr-[0.25rem] border border-solid border-[#a6a6a6] rounded-[50%]"
              src="/stackUser.png"
              width={24}
              height={24}
              alt="user"
            />
            <IoChevronDown size={14} className="text-[#a6a6a6] mr-[0.25rem]" />
          </div>
        </div>
      </div>
    </>
  )
}

export default TopBar

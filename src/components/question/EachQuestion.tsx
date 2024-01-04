import { MdOutlineModeEdit } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BiComment } from "react-icons/bi";
import { ImEye } from "react-icons/im";
import { LuThumbsUp } from "react-icons/lu";
import { PiThumbsUpThin } from "react-icons/pi";
import { QuestionType } from './question.interface';
import './question.css';
import distanceTime from '../../utils/distanceTime';



const EachQuestion = ({
  tags,
  owner,
  is_answered,
  view_count,
  favorite_count,
  down_vote_count,
  up_vote_count,
  answer_count,
  score,
  last_activity_date,
  creation_date,
  last_edit_date,
  question_id,
  link,
  title,
  body,
  content_license,
  accepted_answer_id,
  closed_date,
  closed_reason
}: QuestionType) =>{ 
  
  
  const UserActivity = ()=>{
      if(last_edit_date){
        
        return(
          <div className="flex flex-row items-center flex-wrap p-4">
            <span className="w-[1.25rem] h-[1.25rem]  p-[1px] mr-2 flex items-center self-center justify-center rounded-[50%] border-[2px] border-solid border-[#a6a6a6]">
              <MdOutlineModeEdit color="orange" size={12}  />
            </span>
            <p className="text-[#a6a6a6] text-[0.75rem] font-[500] mr-2">Modified</p>
            <p className="text-[#a6a6a6] text-[0.75rem] font-[500] mr-2">{distanceTime(last_edit_date)}</p>
            <p className="text-[#3a3636] text-[0.80rem] font-[400]">
              {owner?.display_name}
              <span className="ml-1">
                {owner?.reputation}
              </span>
            </p>
          </div>
        )
      } else{
        return(
          <div className="flex flex-row items-center flex-wrap p-4">
            <span className="w-[1.25rem] h-[1.25rem] p-[1px] mr-2 flex self-center items-center justify-center rounded-[50%] border-[2px] border-solid border-[#a6a6a6]">
              <IoDocumentTextOutline color="orange" size={12} />
            </span>
            <p className="text-[#a6a6a6] text-[0.75rem] font-[500] mr-2">Answered</p>
            <p className="text-[#a6a6a6] text-[0.75rem] font-[500] mr-2">{distanceTime(last_activity_date)}</p>
            <p className="text-[#3a3636] text-[0.80rem] font-[400] capitalize">
              {owner?.display_name}
              <span className="ml-1">
                {owner?.reputation}
              </span>
            </p>
          </div>
        )
      }
   

  }

  const Stats = ()=>{

    return(
      <div className="flex flex-row items-center w-full md:max-w-[50%] self-stretch">
          <div className="flex flex-col justify-around md:mr-2 items-center p-[0.750rem] shadow-sm">
              <p className="font-[500] p-2">{up_vote_count || 0}</p>
              <p className="font-[500] text-[0.8rem] p-2 mb-1 capitalize">Votes</p>
              <PiThumbsUpThin className="font-[100]  text-[#a6a6a6]" />
          </div>
          <div className="flex flex-col justify-around md:mr-2 items-center p-[0.750rem] shadow-sm">
              <p className="font-[500] p-2">{answer_count || 0}</p>
              <p className="font-[500] text-[0.8rem] p-2 mb-1 capitalize">Answer</p>
              <BiComment className="font-[100]  text-[#a6a6a6]" />
          </div>
          <div className="flex flex-col justify-around md:mr-2 items-center p-[0.750rem] shadow-sm">
              <p className="font-[500] p-2">{up_vote_count || 0}</p>
              <p className="font-[500] text-[0.8rem] p-2 mb-1 capitalize">Views</p>
              <ImEye className="font-[100]  text-[#a6a6a6]" />
          </div>

      </div>
    )

  }
 

  return(
  <li key={question_id} className="list-none flex flex-row w-[100%] justify-between items-center shadow-sm p-5">
    <div className='w-[100%] md:max-w-[40%] flex flex-col p-2 self-center'>
      <div className="w-full flex flex-col px-[0.875rem]">
        <a href={link} target='_blank'>
          <p className="text-[#1b75d0] text-[1rem] leading-[135%] font-medium break-words">{title}</p>
        </a>
      </div>
      <ul className="w-full flex flex-row flex-wrap mt-2">
          {
            tags?.map((tag)=>(
              <li key={tag} className="list-none">

                <div className="question-tags">
                  {tag}
                </div>
              </li>
            ))
          }

      </ul>
      <UserActivity />
    </div>
    <Stats />
  </li>
)
  }
export default EachQuestion

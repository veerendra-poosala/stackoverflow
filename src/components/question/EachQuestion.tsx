import { QuestionType } from './question.interface'

const EachQuestion = ({
  title,
  tags,
  last_activity_date,
  owner,
  question_id,
  link,
  body,
  is_answered,
  view_count,
  up_vote_count,
  down_vote_count,
  score,
}: QuestionType) => (
  <li className="list-none flex flex-row w-[100%]">
    <div className='w-[100%] md:w-[50%] p-2 border border-solid border-red'>
      <a href={link} className='cursor-pointer'>
        <p className="text-[#1b75d0] break-words">{title}</p>
      </a>
    </div>
    <div></div>
  </li>
)

export default EachQuestion

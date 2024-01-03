import { QuestionType } from '@/pages/questions/question.interface'

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
  <li className="list-none">
    <div>
      <a href={link}>
        <p className="text-[#1b75d0]">{title}</p>
      </a>
    </div>
    <div></div>
  </li>
)

export default EachQuestion

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuestionType} from "./question.interface";


export interface InitialState{
    isLoading : boolean,
    questionData : QuestionType
  }

const initialQuestionState: QuestionType = {
    tags: [],
    owner: {
      reputation: 0,
      user_id: 0,
      user_type: "",
      accept_rate: 0,
      profile_image: "",
      display_name: "",
      link: "",
    },
    is_answered: false,
    view_count: 0,
    favorite_count: 0,
    down_vote_count: 0,
    up_vote_count: 0,
    answer_count: 0,
    score: 0,
    last_activity_date: 0,
    creation_date: 0,
    last_edit_date: 0,
    question_id: 0,
    link: "",
    title: "",
    body: "",
  };
  


  const initialState: InitialState = {
    isLoading : true,
    questionData : initialQuestionState
  }

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    onFetchQuestions: (state, action: PayloadAction<QuestionType>) => {
        state.questionData = action.payload;
    },
    isLoading: (state) => {
        state.isLoading = false;
    }
  },
});

export const { onFetchQuestions, isLoading } = questionSlice.actions;
export const questionReducer = questionSlice.reducer;

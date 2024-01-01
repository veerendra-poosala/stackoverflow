export interface OwnerType {
    reputation: number;
    user_id: number;
    user_type: string;
    accept_rate: number;
    profile_image: string;
    display_name: string;
    link: string;
  }
  
  export interface QuestionType {
    tags: string[];
    owner: OwnerType;
    is_answered: boolean;
    view_count: number;
    favorite_count: number;
    down_vote_count: number;
    up_vote_count: number;
    answer_count: number;
    score: number;
    last_activity_date: number;
    creation_date: number;
    last_edit_date: number;
    question_id: number;
    link: string;
    title: string;
    body: string;
  }
  


  
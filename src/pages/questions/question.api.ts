
import {get} from '../api/interceptor';
import { store } from '@/store/store';
import { onFetchQuestions, isLoading } from './question.slice';


const {dispatch} = store;
const host = `${process.env.NEXT_PUBLIC_STACK_API}`;
console.log(host);

export const listQuestions = async (query?: string) => {
    try {
        const res: any = await get(host);
        dispatch(onFetchQuestions(res.data));
        return res.data;
    } catch (error) {
        console.log('error', error);
    }finally {
        dispatch(isLoading());
    }
};


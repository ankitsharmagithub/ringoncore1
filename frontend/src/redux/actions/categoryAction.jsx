import { toast } from "react-toastify";
import axios from "axios"
import {
    CATEGORY_REQUEST,
    CATEGORY_SUCCESS,
    CATEGORY_FAIL,
    GETALL_CATEGORY_REQUEST,
    GETALL_CATEGORY_SUCCESS,
    GETALL_CATEGORY_FAIL,
  } from "../constants/categoryConstant";

  export const addCategory = (datatosend) => async (dispatch) => {


    try {
        dispatch({ type: CATEGORY_REQUEST });
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const { data } = await axios.post(`/api/V1/createCategory`,datatosend, config);

        dispatch({ type: CATEGORY_SUCCESS, payload: data });


    } catch (error) {

        dispatch({ type: CATEGORY_FAIL, payload: error.response.data.message })

    }
}

export const getCategory = () => async (dispatch) => {


    try {
        dispatch({ type: GETALL_CATEGORY_REQUEST });
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        const { data } = await axios.get(`/api/V1/getCategory`,  config);
      
        dispatch({ type: GETALL_CATEGORY_SUCCESS, payload: data });


    } catch (error) {

        dispatch({ type: GETALL_CATEGORY_FAIL, payload: error.response.data.message })

    }
}
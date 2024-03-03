import {createSelector} from "@reduxjs/toolkit";
import {getApiRequestState} from "@redux/selectors/getApiRequestState/getApiRequestState";
import {IApiRequest} from "@redux/types/ApiRequestType";

export const getToken = createSelector(
    getApiRequestState,
    (apiRequestSlice:IApiRequest) => apiRequestSlice.jwt
)
import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {ApiRequestType} from "@redux/types/ApiRequestType";
import {useHttp} from "@hooks/http.hook";
import {IInputValues} from "@pages/main/components/types/IInputValues";
import {ConfirmPasswordArguments} from "@redux/types/ConfirmPasswordArguments";
import {FetchTokenFulfilledPayload} from "@redux/types/FetchTokenPayload";
import {httpStatusVars} from "@redux/types/httpStatusVars";
import {FeedbackDataPayload} from "@redux/types/FeedbackDataPayload";

const initialState: ApiRequestType = {
    jwt: '',
    isLoadingRequest: false,
    isErrorStatus: false,
    isSuccessRequest: false,
    isCollapseSider: false,
    checkCodeInputValue: '',
    login: '',
    password: '',
    firstConfirmPassword: '',
    secondConfirmPassword: '',
    feedbackData: []
}
export const authenticateUser = createAsyncThunk(
    'apiRequest/authenticateUser',
    ({login, password, remember}:IInputValues) => {
        const {authenticateUser} = useHttp();
        return authenticateUser(login, password, remember);
    }
)
export const googleAuthenticateUser = createAsyncThunk(
    'apiRequest/googleAuthenticateUser',
    () => {
        const {googleAuthenticateUser} = useHttp();
        return googleAuthenticateUser();
    }
)
export const registerNewUser = createAsyncThunk(
    'apiRequest/registerNewUser',
    ({login, password}:IInputValues) => {
        const {registerNewUser} = useHttp();
        return registerNewUser(login, password);
    }
)
export const checkEmail = createAsyncThunk(
    'apiRequest/checkEmail',
    (email:string) => {
        const {checkEmail} = useHttp();
        return checkEmail(email);
    }
)
export const confirmEmail = createAsyncThunk(
    'apiRequest/confirmEmail',
    ({login, code}: { login: string, code: string }) => {
        const {confirmEmail} = useHttp();
        return confirmEmail(login, code);
    }
)
export const changePassword = createAsyncThunk(
    'apiRequest/changePassword',
    ({password, confirmPassword}: ConfirmPasswordArguments) => {
        const {changePassword} = useHttp();
        return changePassword(password, confirmPassword);
    }
)
export const getFeedbacks = createAsyncThunk(
    'apiRequest/getFeedbacks',
    (token:string) => {
        const {getFeedbacks} = useHttp();
        return getFeedbacks(token);
    }
)

export const apiRequestSlice = createSlice({
    name: 'apiRequestSlice',
    initialState,
    reducers: {
        deleteErrorStatus(state) {
            state.isErrorStatus = false;
        },
        deleteSuccessStatus(state) {
            state.isSuccessRequest = false;
        },
        saveRegDataBeforeError(state, action: PayloadAction<IInputValues>) {
            state.login = action.payload.login;
            state.password = action.payload.password;
        },
        setCheckCodeInput(state, action: PayloadAction<string>) {
            state.checkCodeInputValue = action.payload;
        },
        saveConfirmPasswords(state, action: PayloadAction<ConfirmPasswordArguments>) {
            state.firstConfirmPassword = action.payload.password;
            state.secondConfirmPassword = action.payload.confirmPassword;
        },
        setIsCollapseSider(state) {
            state.isCollapseSider = !state.isCollapseSider;
        },
        saveTokenAtStore(state, action: PayloadAction<string>) {
            state.jwt = action.payload;
        }
    },
    extraReducers:
        (builder) => {
            builder.addCase(authenticateUser.pending, (state) => {state.isLoadingRequest = true;})
                .addCase(authenticateUser.fulfilled, (state, action: PayloadAction<FetchTokenFulfilledPayload | number | undefined>) => {
                    state.isLoadingRequest = false;
                    if (typeof action.payload === 'object' && 'rememberUser' in action.payload) {
                        const { token, rememberUser } = action.payload;
                        if (token) {
                            state.jwt = token;
                            (rememberUser) ? localStorage.setItem('jwtToken', token) : sessionStorage.setItem('jwtToken', token);
                        }
                    }
                    //отрефактори нижнюю строчку
                    (typeof action.payload === 'number' && action.payload === httpStatusVars['_401'])
                        ? state.isErrorStatus = true : state.isErrorStatus = true;
                })
                .addCase(authenticateUser.rejected, (state) => {
                    state.isLoadingRequest = false;
                    state.isErrorStatus = true;
                })
                .addCase(googleAuthenticateUser.pending, (state) => {state.isLoadingRequest = true;})
                .addCase(googleAuthenticateUser.fulfilled, (state) => {
                    state.isLoadingRequest = false;
                })
                .addCase(googleAuthenticateUser.rejected, (state) => {
                    state.isLoadingRequest = false;
                    state.isErrorStatus = true;
                })
                .addCase(registerNewUser.pending, (state) => {state.isLoadingRequest = true;})
                .addCase(registerNewUser.fulfilled, (state, action:PayloadAction<number | undefined>) => {
                    state.isLoadingRequest = false;
                    state.isSuccessRequest = true;
                    if (action.payload === httpStatusVars['_409']) {
                        state.isErrorStatus = true;
                    } else if (action.payload !== httpStatusVars['_201']) {
                        state.isErrorStatus = true;
                    }
                })
                .addCase(registerNewUser.rejected, (state) => {
                    state.isLoadingRequest = false;
                    state.isErrorStatus = true;
                })
                .addCase(checkEmail.pending, (state) => {state.isLoadingRequest = true;})
                .addCase(checkEmail.fulfilled, (state, action:PayloadAction<number | undefined>) => {
                    state.isLoadingRequest = false;
                    state.isSuccessRequest = true;
                    if (action.payload === httpStatusVars['_404']) {
                        state.isErrorStatus = true;
                    } else if (action.payload !== httpStatusVars['_200']) {
                        state.isErrorStatus = true;
                    }
                })
                .addCase(checkEmail.rejected, (state) => {
                    state.isLoadingRequest = false;
                    state.isErrorStatus = true;
                })
                .addCase(confirmEmail.pending, (state) => {state.isLoadingRequest = true;})
                .addCase(confirmEmail.fulfilled, (state, action:PayloadAction<number | undefined>) => {
                    state.isLoadingRequest = false;
                    state.isSuccessRequest = true;
                    if (action.payload !== httpStatusVars['_200']) {
                        state.isErrorStatus = true;
                        state.checkCodeInputValue = '';
                    }
                })
                .addCase(confirmEmail.rejected, (state) => {
                    state.isLoadingRequest = false;
                })
                .addCase(changePassword.pending, (state) => {state.isLoadingRequest = true;})
                .addCase(changePassword.fulfilled, (state, action:PayloadAction<number | undefined>) => {
                    state.isLoadingRequest = false;
                    state.isSuccessRequest = true;
                    if (action.payload !== httpStatusVars['_200']) {
                        state.isErrorStatus = true;
                    }
                })
                .addCase(changePassword.rejected, (state) => {
                    state.isLoadingRequest = false;
                })
                .addCase(getFeedbacks.pending, (state) => {state.isLoadingRequest = true;})
                .addCase(getFeedbacks.fulfilled, (state, action:PayloadAction<FeedbackDataPayload[]>) => {
                    state.isLoadingRequest = false;
                    state.isSuccessRequest = true;
                    state.feedbackData = action.payload;
                })
                .addCase(getFeedbacks.rejected, (state) => {
                    state.isLoadingRequest = false;
                })
        }
})
export const { reducer: apiRequestReducer } = apiRequestSlice;

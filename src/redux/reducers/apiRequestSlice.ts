import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {IApiRequest} from "@redux/types/IApiRequestSlice";
import {useHttp} from "@hooks/http.hook";
import {IInputValues} from "@pages/main/components/types/IInputValues";
import {ConfirmPasswordArguments} from "@redux/types/ConfirmPasswordArguments";
import {FetchTokenFulfilledPayload} from "@redux/types/FetchTokenPayload";
import {httpStatusCodes} from "@redux/types/httpStatusCodes";

const initialState: IApiRequest = {
    jwt: '',
    isLoadingRequest: false,
    isErrorStatus: false,
    isSuccessRequest: false,
    checkCodeInputValue: '',
    login: '',
    password: '',
    firstConfirmPassword: '',
    secondConfirmPassword: ''
}
export const getToken = createAsyncThunk(
    'apiRequest/fetchToken',
    ({login, password, remember}:IInputValues) => {
        const {getToken} = useHttp();
        return getToken(login, password, remember);
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
        }
    },
    extraReducers:
        (builder) => {
            builder.addCase(getToken.pending, (state) => {state.isLoadingRequest = true;})
                .addCase(getToken.fulfilled, (state, action: PayloadAction<FetchTokenFulfilledPayload | number | undefined>) => {
                    state.isLoadingRequest = false;
                    if (typeof action.payload === 'object' && 'inputCheck' in action.payload) {
                        const { token, inputCheck } = action.payload;
                        if (token) {
                            state.jwt = token;
                            (inputCheck) ? localStorage.setItem('jwtToken', token) : sessionStorage.setItem('jwtToken', token);
                        }
                    }
                    (typeof action.payload === 'number' && action.payload === httpStatusCodes['401'])
                        ? state.isErrorStatus = true : state.isErrorStatus = true;
                })
                .addCase(getToken.rejected, (state) => {
                    state.isLoadingRequest = false;
                    state.isErrorStatus = true;
                })
                .addCase(registerNewUser.pending, (state) => {state.isLoadingRequest = true;})
                .addCase(registerNewUser.fulfilled, (state, action:PayloadAction<number | undefined>) => {
                    state.isLoadingRequest = false;
                    state.isSuccessRequest = true;
                    if (action.payload === httpStatusCodes['409']) {
                        state.isErrorStatus = true;
                    } else if (action.payload !== httpStatusCodes['201']) {
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
                    if (action.payload === httpStatusCodes['404']) {
                        state.isErrorStatus = true;
                    } else if (action.payload !== httpStatusCodes['200']) {
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
                    if (action.payload !== httpStatusCodes['200']) {
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
                    if (action.payload !== httpStatusCodes['200']) {
                        state.isErrorStatus = true;
                    }
                })
                .addCase(changePassword.rejected, (state) => {
                    state.isLoadingRequest = false;
                })
        }
})

const {reducer} = apiRequestSlice;
export default reducer;
export const isLoadingRequestSelector = (state: IApiRequest) => state.isLoadingRequest;
export const loginSelector = (state: IApiRequest) => state.login;
export const isErrorStatusSelector = (state: IApiRequest) => state.isErrorStatus;

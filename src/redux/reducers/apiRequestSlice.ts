import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {IApiRequest} from "@redux/stateTypes/IApiRequestSlice";
import {useHttp} from "@hooks/http.hook";
import {IInputValues} from "@pages/main/components/types/IInputValues";

const initialState: IApiRequest = {
    jwt: '',
    error: '',
    isLoadingRequest: false,
    isErrorStatus: false,
    isSuccessRequest: false,
    checkCodeInputValue: '',
    login: '',
    password: '',
    firstConfirmPassword: '',
    secondConfirmPassword: ''
}
type FetchTokenFulfilledPayload = {
    token: string;
    inputCheck: boolean;
};

export const fetchToken = createAsyncThunk(
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
    ({password, confirmPassword}: { password: string, confirmPassword: string }) => {
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
        saveConfirmPasswords(state, action: PayloadAction<any>) {
            state.firstConfirmPassword = action.payload.password;
            state.secondConfirmPassword = action.payload.confirmPassword;
        }
    },
    extraReducers:
        (builder) => {
            builder.addCase(fetchToken.pending, (state) => {state.isLoadingRequest = true;})
                .addCase(fetchToken.fulfilled, (state, action: PayloadAction<FetchTokenFulfilledPayload | number>) => {
                    state.isLoadingRequest = false;
                    state.error = '';
                    if (typeof action.payload === 'number' && action.payload === 401) {
                        state.isErrorStatus = true;
                    } else if (typeof action.payload === 'number' && action.payload === 404) {
                        state.isErrorStatus = true;
                    }
                    if (typeof action.payload === 'object' && 'inputCheck' in action.payload) {
                        const { token, inputCheck } = action.payload;
                        if (token) {
                            state.jwt = token;
                            if (inputCheck) {
                                localStorage.setItem('jwtToken', token);
                            } else {
                                sessionStorage.setItem('jwtToken', token);
                            }
                        }
                    }
                })
                .addCase(fetchToken.rejected, (state) => {
                    state.isLoadingRequest = false;
                    state.error = 'something was wrong!';
                    state.isErrorStatus = true;
                })
                .addCase(registerNewUser.pending, (state) => {state.isLoadingRequest = true;})
                .addCase(registerNewUser.fulfilled, (state, action:PayloadAction<any>) => {
                    //типизируй экшен нормально
                    state.isLoadingRequest = false;
                    state.error = '';
                    state.isSuccessRequest = true;
                    if (typeof action.payload === 'number' && action.payload === 409) {
                        state.isErrorStatus = true;
                    } else if (typeof action.payload === 'number' && action.payload !== 201) {
                        state.isErrorStatus = true;
                    }
                })
                .addCase(registerNewUser.rejected, (state) => {
                    state.isLoadingRequest = false;
                    state.error = 'something was wrong!';
                    state.isErrorStatus = true;
                })
                .addCase(checkEmail.pending, (state) => {state.isLoadingRequest = true;})
                .addCase(checkEmail.fulfilled, (state, action:PayloadAction<any>) => {
                    //типизируй экшен нормально
                    state.isLoadingRequest = false;
                    state.error = '';
                    state.isSuccessRequest = true;
                    if (typeof action.payload === 'number' && action.payload === 404) {
                        state.isErrorStatus = true;
                    } else if (typeof action.payload === 'number' && action.payload !== 200) {
                        state.isErrorStatus = true;
                    }
                })
                .addCase(checkEmail.rejected, (state) => {
                    state.isLoadingRequest = false;
                    state.error = 'something was wrong!';
                    state.isErrorStatus = true;
                })
                .addCase(confirmEmail.pending, (state) => {state.isLoadingRequest = true;})
                .addCase(confirmEmail.fulfilled, (state, action:PayloadAction<any>) => {
                    //типизируй экшен нормально
                    state.isLoadingRequest = false;
                    state.error = '';
                    state.isSuccessRequest = true;
                    if (typeof action.payload === 'number' && action.payload !== 200) {
                        state.isErrorStatus = true;
                        state.checkCodeInputValue = '';
                    }
                })
                .addCase(confirmEmail.rejected, (state) => {
                    state.isLoadingRequest = false;
                    state.error = 'something was wrong!';
                })
                .addCase(changePassword.pending, (state) => {state.isLoadingRequest = true;})
                .addCase(changePassword.fulfilled, (state, action:PayloadAction<any>) => {
                    //типизируй экшен нормально
                    state.isLoadingRequest = false;
                    state.error = '';
                    state.isSuccessRequest = true;
                    if (typeof action.payload === 'number' && action.payload !== 200) {
                        state.isErrorStatus = true;
                    }
                })
                .addCase(changePassword.rejected, (state) => {
                    state.isLoadingRequest = false;
                    state.error = 'something was wrong!';
                })
                .addDefaultCase(() => {})
        }
})

const {reducer} = apiRequestSlice;
export default reducer;

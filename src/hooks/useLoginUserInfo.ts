import { reactive } from '@vue/composition-api';
export interface userInfoType {
    firstName: string;
    lastName: string;
    email: string;
}
export function useLoginUserInfo() {
    const userInfo: userInfoType = reactive({
        firstName: '',
        lastName: '',
        email: '',
    });

    return { userInfo };
}

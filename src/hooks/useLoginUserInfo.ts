import { reactive } from '@vue/composition-api';
export interface userInfoType {
    firstName: string;
    lastName: string;
    company: string;
    email: string;
    phone: string;
}
export function useLoginUserInfo() {
    const userInfo: userInfoType = reactive({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
    });

    return { userInfo };
}

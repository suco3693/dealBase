import { SetupContext, reactive } from '@vue/composition-api';
export interface companyInfoType {
    name: string;
    website: string;
    industry: string;
    addressLineOne: string;
    city: string;
    state: string;
    zipCode: string;
}

export function useCompanyInfo(context: SetupContext) {
    let companyInfo: companyInfoType = reactive({
        name: '',
        website: '',
        industry: '',
        addressLineOne: '',
        city: '',
        state: '',
        zipCode: '',
    });
    function clearCompanyInfo() {
        Object.assign(companyInfo, {
            name: '',
            website: '',
            industry: '',
            addressLineOne: '',
            city: '',
            state: '',
            zipCode: '',
        });
        context.root.$store.dispatch('clearCompanyInfo');
    }
    function addCompanyInfo(companyInfoSlot: keyof companyInfoType, updatedValue: string) {
        context.root.$store.dispatch('setCompanyInfo', {
            slot: companyInfoSlot,
            updatedValue,
        });
    }
    //TODO combine these into 1 function
    function updateCompanyName(name: string) {
        addCompanyInfo('name', name);
    }
    function updateCompanyWebsite(website: string) {
        addCompanyInfo('website', website);
    }
    function updateCompanyIndustry(industry: string) {
        addCompanyInfo('industry', industry);
    }
    function updateCompanyAddress1(addressLineOne: string) {
        addCompanyInfo('addressLineOne', addressLineOne);
    }
    function updateCompanyCity(city: string) {
        addCompanyInfo('city', city);
    }
    function updateCompanyState(state: string) {
        addCompanyInfo('state', state);
    }
    function updateCompanyZipCode(zipCode: string) {
        addCompanyInfo('zipCode', zipCode);
    }
    return {
        companyInfo,
        clearCompanyInfo,
        updateCompanyName,
        updateCompanyWebsite,
        updateCompanyIndustry,
        updateCompanyAddress1,
        updateCompanyCity,
        updateCompanyState,
        updateCompanyZipCode,
    };
}

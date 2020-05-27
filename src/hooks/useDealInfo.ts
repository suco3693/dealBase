import { SetupContext, reactive } from '@vue/composition-api';

export interface dealInfoType {
    revenue: number | null;
    EBITDA: number | null;
    loanType: string | null;
    askingPercent: number | null;
}
export function useDealInfo(context: SetupContext) {
    let dealInfo: dealInfoType = reactive({
        revenue: null,
        EBITDA: null,
        loanType: null,
        askingPercent: null,
    });
    function clearDealInfo() {
        Object.assign(dealInfo, {
            revenue: null,
            EBITDA: null,
            loanType: null,
            askingPercent: null,
        });
        context.root.$store.dispatch('clearDealInfo');
    }
    function addDealInfo(dealInfoSlot: keyof dealInfoType, updatedValue: string | number | null) {
        context.root.$store.dispatch('setDealInfo', {
            slot: dealInfoSlot,
            updatedValue,
        });
    }
    function updateDealRevenue(revenue: dealInfoType['revenue']) {
        addDealInfo('revenue', revenue);
    }
    function updateDealEBITDA(EBITDA: dealInfoType['EBITDA']) {
        addDealInfo('EBITDA', EBITDA);
    }
    function updateDealLoanType(loanType: dealInfoType['loanType']) {
        addDealInfo('loanType', loanType);
    }
    function updateDealPercent(askingPercent: dealInfoType['askingPercent']) {
        addDealInfo('askingPercent', askingPercent);
    }
    return {
        dealInfo,
        clearDealInfo,
        updateDealRevenue,
        updateDealEBITDA,
        updateDealLoanType,
        updateDealPercent,
    };
}

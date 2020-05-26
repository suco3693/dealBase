import { SetupContext, reactive } from '@vue/composition-api';

export interface dealInfoType {
    revenue: typeof financialRanges | null;
    EBITDA: typeof financialRanges | null;
    loanType: string | null;
    askingPercent: number | null;
}
const financialRanges = ['<1M', '1M-5M', '6M-10M', '11M-20M', '21M-50M', '50M-100M', '>100M'];
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
    function addDealInfo(
        dealInfoSlot: keyof dealInfoType,
        updatedValue: dealInfoType['revenue'] | dealInfoType['loanType'] | dealInfoType['askingPercent'],
    ) {
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
        financialRanges,
        dealInfo,
        clearDealInfo,
        updateDealRevenue,
        updateDealEBITDA,
        updateDealLoanType,
        updateDealPercent,
    };
}

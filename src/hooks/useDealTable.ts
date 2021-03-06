import { paramCase } from 'change-case';
import { mockData } from '@/mock/mockDeals.js';
interface extraOptionsTypes {
    [key: string]: any;
}

export function useDealTable() {
    const headerSet: Array<Array<any>> = [
        ['Submit Date', {}],
        ['Industry', {}],
        ['EBITDA Range', {}],
        ['Revenue Range', {}],
        ['Loan Size', {}],
        ['Expected Rate', {}],
    ];

    function makeHeader(text: string, extraOptions?: extraOptionsTypes | undefined) {
        return Object.assign(
            {
                text,
                value: paramCase(text),
                align: 'center',
                sortable: true,
            },
            extraOptions,
        );
    }
    const mockDataSet = mockData;
    //TODO fix header type
    const headers = headerSet.map((header: any) => makeHeader(header[0], header[1]));

    return {
        headers,
        mockDataSet,
    };
}

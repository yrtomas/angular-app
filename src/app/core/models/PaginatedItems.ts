export class  PaginatedItems{
    pageIndex: number | undefined;
    pageSize: number | undefined;
    count: number | undefined;
    data: any[] = [];
    
    constructor(rawjson?: any) {
        Object.assign(this, rawjson);
    }
}

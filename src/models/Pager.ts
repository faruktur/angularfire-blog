
export class Pager{
    totalPage:number;
    currentPage:number;
    pageSize:number;
    constructor(totalPage:number,currentPage:number,pageSize:number){
        this.totalPage=totalPage;
        this.currentPage=currentPage;
        this.pageSize=pageSize;
    }
}
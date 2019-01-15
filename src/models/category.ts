export class Category{
    constructor(){
        this.parent=null;
        this.subcategories=[];
        this.$key="";
    }
    $key:string;
    categoryName:string;
    parent:string=null;
    subcategories:Category[]=[];
}

import { PostCommentItem } from "./post-comment-item";

export class Post{
    constructor(){
        this.comments=[];
    }
    $key:string='';
    title:string='';
    category:string;
    description:string='';
    article:string='';
    imageURL:string;
    createdDate:number;
    updatedDate:number;
    owner:string;
    comments:PostCommentItem[]=[];
}
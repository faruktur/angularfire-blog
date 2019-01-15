export class PostCommentItem{
    constructor(init?:Partial<PostCommentItem>){
        Object.assign(this,init);
    }
    $key:string;
    name:string;
    comment:string;
    email:string;
    reply:ReplyItem[]=[];

}
export class ReplyItem{
    name:string;comment:string;
}
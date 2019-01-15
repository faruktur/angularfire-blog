import { PostCommentItem } from "./post-comment-item";

export class PostComment {
    items:PostCommentItem[]=[];
    constructor(private itemsMap: { [commentId: string]: PostCommentItem }) {
        this.itemsMap = itemsMap || {};
        for (let commentId in itemsMap) {
            let item = itemsMap[commentId];
            this.items.push(new PostCommentItem({$key:commentId,...item}));
        }
    }
}

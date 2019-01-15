import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../shared/services/category/category.service';
import { Category } from 'src/models/category';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories:Category[]=[];
  category:Category=new Category();
  parentCategories: Category[]=[];
  isActiveModal:boolean=false;
  closeResult: string;
  constructor(private categoryService:CategoryService,private modalService:NgbModal) {
   }

  ngOnInit() {
     
    this.categoryService.getAll().subscribe(cats=>
      {
        console.log('Categories Subscription',cats);
        this.categories=cats as Category[];
        this.parentCategories=this.categories.filter(p=>p.parent==null);
      });
  }
  edit(category:Category,content){
    console.log('EDİT category',category);
    this.category.$key=category.$key;
    this.category.categoryName=category.categoryName;
    this.open(content);
  }

  save(category:Category){
    
    if(this.category.$key&&this.category.$key.length>0) this.categoryService.update(this.category.$key,category);
    else this.categoryService.create(category);
    this.modalService.dismissAll();
    this.category=new Category();
  }
  delete(category){
    this.categoryService.delete(category.$key);
  }









  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}

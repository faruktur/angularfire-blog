import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/models/category';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from '../../shared/services/category/category.service';

export class NgbdModalContent {
  @Input() Category;

  constructor(public activeModal: NgbActiveModal) {}
}
@Component({
  selector: 'app-category-form-modal',
  styleUrls: ['./category-form-modal.component.css'],
  templateUrl:'./category-form-modal.component.html'
})
export class CategoryFormModalComponent implements OnInit {
  @Input('isActive') isActive: boolean;
  @Input('parentCategories') parentcategories:Category[]=[];
  @Input('category') category:Category;

  constructor(private modalService:NgbModal,private categoryService:CategoryService) {
   if(this.isActive){
     this.open();
   }
   }

  ngOnInit() {
  }

  Save(formvalues:any){
    if(this.category.$key.length>0) this
  }
  
  
  
  
  
  
  
  
  
  
  // MODAL CODES
  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
  }

 
  
}

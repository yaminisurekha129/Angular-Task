import { Component,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  @ViewChild('r') form!: NgForm;
  imagePath :string | undefined;

  constructor(){
 
  }
   
  submit(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }
    console.log(form.value);

}
}



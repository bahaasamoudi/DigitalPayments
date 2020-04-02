import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-charge',
  templateUrl: './charge.component.html'
})
export class ChargeComponent implements OnInit {
  @ViewChild('barcodeResult') barcodeResult : ElementRef
  barcodeValue


  heading = 'Charging';
  subheading = 'Charging For Customers';
  icon = 'fa fa-credit-card';

  closeResult: string;

  constructor(private modalService: NgbModal) {
  }

  generateBarCode(content, form: NgForm) {
      this.open(content)
      // this.transactionService.Charge(form.value.codeText).subscribe(data => {
      //   this.barcodeValue =  'https://barcode.tec-it.com/barcode.ashx?data=' + data["Code"] + '&code=Code128&multiplebarcodes=false&translate-esc=false&unit=Fit&dpi=96&imagetype=Gif&rotation=0&color=%23000000&bgcolor=%23ffffff&qunit=Mm&quiet=0'
      // })
    }

  open(content) {
    
    this.modalService.open(content).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
      
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;

          });
  }

  // openCentred(content) {
  //   this.modalService.open(content, {centered: true});
  // }

  // openSmall(content) {
  //   this.modalService.open(content, {
  //     size: 'sm'
  //   });
  // }

  // openLarge(content) {
  //   this.modalService.open(content, {
  //     size: 'lg'
  //   });
  // }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }

  ngOnInit() {
    
  }



  

}

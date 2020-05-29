import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TransactionsService } from 'src/app/services/transactions.service';

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
  errorList :string[]
  invalidGenerate = false

  form: FormGroup;
  amount: FormControl;
  usedFor: FormControl;


  constructor(private modalService: NgbModal, private transactionService: TransactionsService,  private fb: FormBuilder,) {
  }

  ngOnInit() {
    this.amount = new FormControl('', [Validators.required]);
    this.usedFor = new FormControl('purchase', [Validators.required]);
    this.form = this.fb.group({
      'amount': this.amount,
      'usedFor': this.usedFor,
    });
  }



  generateBarCode(content) {
      this.open(content)
      let formDetails = this.form.value;
      this.transactionService.generateBarcode(formDetails.amount, formDetails.usedFor).subscribe(data => {
        this.barcodeValue =  'https://barcode.tec-it.com/barcode.ashx?data=' + data["code"] + '&code=Code128&multiplebarcodes=false&translate-esc=false&unit=Fit&dpi=96&imagetype=Gif&rotation=0&color=%23000000&bgcolor=%23ffffff&qunit=Mm&quiet=0'
        this.errorList = []
        this.invalidGenerate = false;
      }, error => {
        this.modalService.dismissAll();
        this.invalidGenerate = true;
        
        var myErrors = error.error.value;
        this.errorList = [];
        for(var i = 0; i < myErrors.length; i++) {
          this.errorList.push(myErrors[i]);
        }
      })
    }

  open(content) {
    
    this.modalService.open(content).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
      
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;

          });
  }



  

}

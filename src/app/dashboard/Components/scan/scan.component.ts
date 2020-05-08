import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Quagga from 'quagga'; // ES6
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {

  heading = 'Charging';
  subheading = 'Charging For Customers';
  icon = 'fa fa-credit-card';
  invalidScan: boolean;
  errorList: string[];
  closeResult: string;
  success: string;
  constructor(private modalService: NgbModal, private transactionService: TransactionsService) { }


    open(content) {
      this.success = ""
      this.errorList = []
      this.invalidScan = false;
    this.modalService.open(content).result.then((result) => {
     
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  
          });

           // this.closeResult = `Closed with: ${result}`;
           var that = this;

      Quagga.init({
        inputStream : {
          name : "Live",
          type : "LiveStream",
          target: document.querySelector('#camera')    // Or '#yourElement' (optional)
        },
        decoder : {
          readers : ["code_128_reader"]
        }
      }, function(err) {
          if (err) {
              console.log(err);
              return
          }
          console.log("Initialization finished. Ready to start");
          document.getElementById('camera').querySelector('video').style.setProperty('width', '100%');
          Quagga.start();
        });
        Quagga.onDetected(function(data) {
         
          that.transactionService.charge(data.codeResult.code).subscribe(data => {
            that.modalService.dismissAll();
            that.success = "Successful"
            that.errorList = []
            that.invalidScan = false;
          }, error => {
           that.invalidScan = true;
        
            var myErrors = error.error.value;
            that.errorList = [];
            for(var i = 0; i < myErrors.length; i++) {
              that.errorList.push(myErrors[i]);
            }
          })
      
        });
         
  }




  ngOnInit() {
  
  }
}


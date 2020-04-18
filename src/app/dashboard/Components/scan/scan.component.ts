import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Quagga from 'quagga'; // ES6

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {

  heading = 'Charging';
  subheading = 'Charging For Customers';
  icon = 'fa fa-credit-card';

  closeResult: string;
 

    open(content) {
    
    this.modalService.open(content).result.then((result) => {
     
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  
          });

           // this.closeResult = `Closed with: ${result}`;
           

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
         alert(data.codeResult.code)
        });
         
  }




  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  
  }
}


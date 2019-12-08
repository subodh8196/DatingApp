import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

 confirm(message: string, okCallback: () => any){
   alertify.confirm(message, (e: any) => {
     if (e) {
       okCallback();

     }
     else {}
   });
 }

 success(message: string) {
   alertify.success(message);
 }

 error(message: string){
  alertify.error(message);
}

waring(message: string){
  alertify.waring(message);
}

message(message: string){
  alertify.message(message);
}

}

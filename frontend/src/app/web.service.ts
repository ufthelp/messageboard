import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class WebService {
    BASE_URL = 'http://localhost:8083/api';

    private messageStore = [];
    private messageSubject = new Subject();
    messages = this.messageSubject.asObservable();

    constructor(private http:Http, private sb:MdSnackBar){
        this.getMessages();
    }
    
    getMessages(user){
            user = user ? '/'+user : '';
            var response = this.http.get(this.BASE_URL + '/messages' + user).subscribe(response => {
                this.messageStore= response.json();
                this.messageSubject.next(this.messageStore);
            },error =>{
                this.handleError('Unable to receive data'); 
            });
    }

    async postMessage(message){
        try {
            var response= await this.http.post(this.BASE_URL + '/messages',message).toPromise();
            this.messageStore.push(response.json());
            this.messageSubject.next(this.messageStore);
        } catch (error) {
            this.handleError('Unable to send data');
        }
       
    }
    private handleError(error){
        this.sb.open(error,'close',{duration: 2000}); 
    }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class Exam2Service {
    constructor(private http: HttpClient) {
    }

    async loadData() {
        const resp = await fetch('https://api.publicapis.org/categories');
        const data = await resp.json();
        return data;

    }
}

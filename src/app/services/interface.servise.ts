import { Injectable } from '@angular/core';

export interface books {
  id: number, 
  name: string, 
  authors: any[],
  year?: number,
  isbn: number,
  picture?: string | any
}

@Injectable({
  providedIn: 'root'
})
export class InterfaceService {
}

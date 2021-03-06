import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BBErrorMessagesService {
  required = "Campo requerido";
  minlength = "El campo debe tener al menos X caractéres";
  maxlength = "El campo debe tener como máximo X caractéres";
  email = "El campo no es un email válido";
  url = "El campo no es una URL válida";
  pattern = "El campo no cumple el patrón establecido";
  number = "El campo no es un número válido";

  constructor() { }
}

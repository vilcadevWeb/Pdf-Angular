import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import generatePDF from './lib/pdf';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pdf-angular';

  onGeneratePDF(){

    const products = [
      { nombre: 'Laptop', cantidad: 2, total: 1500 },
      { nombre: 'Teclado', cantidad: 5, total: 50 },
      { nombre: 'Monitor', cantidad: 1, total: 300 },
      { nombre: 'Ratón', cantidad: 3, total: 30 },
      { nombre: 'Auriculares', cantidad: 4, total: 120 },
      { nombre: 'Impresora', cantidad: 1, total: 200 },
      { nombre: 'Cámara', cantidad: 2, total: 500 },
      { nombre: 'Micrófono', cantidad: 3, total: 80 },
      { nombre: 'Altavoces', cantidad: 2, total: 100 },
      { nombre: 'Webcam', cantidad: 1, total: 70 },
      { nombre: 'Tarjeta gráfica', cantidad: 1, total: 400 },
      { nombre: 'Placa base', cantidad: 2, total: 150 },
      { nombre: 'Memoria RAM', cantidad: 4, total: 250 },
      { nombre: 'Disco duro', cantidad: 3, total: 300 },
      { nombre: 'Fuente de alimentación', cantidad: 2, total: 100 },
      { nombre: 'Silla ergonómica', cantidad: 1, total: 150 },
      { nombre: 'Teclado mecánico', cantidad: 2, total: 120 },
      { nombre: 'Monitor 4K', cantidad: 1, total: 600 },
      { nombre: 'Charger portátil', cantidad: 3, total: 45 },
      { nombre: 'Smartphone', cantidad: 1, total: 500 },
      { nombre: 'Tablet', cantidad: 2, total: 250 },
      { nombre: 'Disco SSD', cantidad: 2, total: 180 },
      { nombre: 'Cable HDMI', cantidad: 6, total: 15 },
      { nombre: 'Proyector', cantidad: 1, total: 350 },
      { nombre: 'Funda para Laptop', cantidad: 4, total: 40 },
      { nombre: 'Hub USB', cantidad: 5, total: 25 },
      { nombre: 'Lámpara LED', cantidad: 3, total: 60 },
      { nombre: 'Batería externa', cantidad: 4, total: 80 },
      { nombre: 'Sofá inteligente', cantidad: 1, total: 800 },
      { nombre: 'Reloj inteligente', cantidad: 2, total: 150 },
      { nombre: 'Gafas VR', cantidad: 1, total: 300 },
      { nombre: 'Dispositivo de streaming', cantidad: 3, total: 120 },
      { nombre: 'Smartwatch', cantidad: 4, total: 200 },
      { nombre: 'Teclado numérico', cantidad: 5, total: 40 },
      { nombre: 'Cargador inalámbrico', cantidad: 6, total: 50 },
      { nombre: 'Cámara de seguridad', cantidad: 2, total: 180 },
      { nombre: 'Soporte para laptop', cantidad: 3, total: 35 }
    ];

    const reciboNo = '123456789'

    const fecha = '07 de Marzo de 2024'

    generatePDF(products, reciboNo, fecha);
  }
}

const fs = require('fs');
const path = require('path');
const chai = require('chai');
const expect = chai.expect;

describe('Página HTML', () => {
  let contenidoHTML;

  before(() => {
    const rutaHTML = path.resolve(__dirname, '..', 'index.html');
    console.log('📄 Ruta absoluta del archivo HTML:', rutaHTML);

    contenidoHTML = fs.readFileSync(rutaHTML, 'utf-8');
    console.log('📄 Contenido leído del archivo HTML:\n', contenidoHTML);
  });

  it('debe contener el título "Hola Mundo"', () => {
    expect(contenidoHTML).to.include('<title>Hola Mundo</title>');
  });

  it('debe contener el texto "¡Hola Mundo!" en el cuerpo', () => {
    expect(contenidoHTML).to.include('<h1>¡Hola Mundo!</h1>');
  });
});

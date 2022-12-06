/* eslint-disable import/no-duplicates */
import $ from 'jquery';
import canvas from '.';
import { addPhoto } from '.';
import { fade } from '.';

export default function midpanel() {
  document.getElementById('szwecja-button').addEventListener('click', () => {
    canvas.photos = [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Podzia%C5%82_administracyjny_I_RP.png', width: 2000, offsetX: 0, offsetY: 0 },
      { url: 'https://ocdn.eu/pulscms-transforms/1/UUxktkqTURBXy8xZTcyZjczOWYxNzVlN2UwMjNkOTRmNzBkYTI0MGU1MS5qcGVnkpUDAAzNAyDNAcKTBc0EsM0CpA', width: 800, offsetX: 0, offsetY: 0 },
      { url: 'https://i.gremicdn.pl/image/free/ef565724f95c07deb7e1af90244ae691/?t=resize:fill:1200:716,enlarge:1', width: 800, offsetX: 0, offsetY: 0 },
      { url: 'https://i.ibb.co/nCtDZ3T/a.png', width: 800, offsetX: 0, offsetY: 0 },
    ];
    fade(canvas.photos[0]);
  });
  document.getElementById('rosja-button').addEventListener('click', () => {
    canvas.photos = [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Wojna_polsko-rosyjska_1654-1667.svg/800px-Wojna_polsko-rosyjska_1654-1667.svg.png', width: 1000, offsetX: 0, offsetY: 0 }];
    fade(canvas.photos[0]);
  });
}

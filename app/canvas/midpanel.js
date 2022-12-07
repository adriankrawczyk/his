/* eslint-disable import/no-duplicates */
import $ from 'jquery';
import canvas from '.';
import { addPhoto } from '.';
import { fade } from '.';

export default function midpanel() {
  document.getElementById('szwecja-button').addEventListener('click', () => {
    canvas.photos = [
      { url: 'https://cdn.discordapp.com/attachments/696659588791009351/1050184850402967603/his2.jpg', width: 2000, offsetX: 0, offsetY: 0 },
      { url: 'https://cdn.discordapp.com/attachments/696659588791009351/1050184862985883658/his3.jpg', width: 800, offsetX: 0, offsetY: 0 },
      { url: 'https://cdn.discordapp.com/attachments/696659588791009351/1050184874906107994/his4.jpg', width: 800, offsetX: 0, offsetY: 0 },
      { url: 'https://cdn.discordapp.com/attachments/696659588791009351/1050184887539335269/his5.jpg', width: 800, offsetX: 0, offsetY: 0 },

      { url: 'https://cdn.discordapp.com/attachments/696659588791009351/1050184921689362504/his7.jpg', width: 800, offsetX: 0, offsetY: 0 },

      { url: 'https://cdn.discordapp.com/attachments/696659588791009351/1050184900000624640/his6.jpg', width: 800, offsetX: 0, offsetY: 0 },

      { url: 'https://cdn.discordapp.com/attachments/696659588791009351/1050184939204788254/his8.jpg', width: 800, offsetX: 0, offsetY: 0 },

      { url: 'https://cdn.discordapp.com/attachments/696659588791009351/1050184965347885146/his9.jpg', width: 800, offsetX: 0, offsetY: 0 },

      { url: 'https://cdn.discordapp.com/attachments/696659588791009351/1050184979151323258/his10.jpg', width: 800, offsetX: 0, offsetY: 0 },
    ];
    fade(canvas.photos[0]);
  });
  document.getElementById('rosja-button').addEventListener('click', () => {
    canvas.photos = [
      { url: 'https://cdn.discordapp.com/attachments/696659588791009351/1050184993768484924/his11.jpg', width: 1000, offsetX: 0, offsetY: 0 },
      { url: 'https://cdn.discordapp.com/attachments/696659588791009351/1050185010096918589/his12.jpg', width: 1000, offsetX: 0, offsetY: 0 },
      { url: 'https://cdn.discordapp.com/attachments/696659588791009351/1050185024558870538/his13.jpg', width: 1000, offsetX: 0, offsetY: 0 },
      { url: 'https://cdn.discordapp.com/attachments/696659588791009351/1050185037456359535/his14.jpg', width: 1000, offsetX: 0, offsetY: 0 },
      { url: 'https://cdn.discordapp.com/attachments/696659588791009351/1050185051301752872/his15.jpg', width: 1000, offsetX: 0, offsetY: 0 },
      { url: 'https://cdn.discordapp.com/attachments/696659588791009351/1050185070104813689/his16.jpg', width: 1000, offsetX: 0, offsetY: 0 },
      { url: 'https://cdn.discordapp.com/attachments/696659588791009351/1050185090401050785/his17.jpg', width: 1000, offsetX: 0, offsetY: 0 },
      { url: 'https://cdn.discordapp.com/attachments/696659588791009351/1050185105991274588/his18.jpg', width: 1000, offsetX: 0, offsetY: 0 },
      { url: 'https://cdn.discordapp.com/attachments/696659588791009351/1050185120356769822/his19.jpg', width: 1000, offsetX: 0, offsetY: 0 },
    ];
    fade(canvas.photos[0]);
  });
  document.getElementById('kozacy-button').addEventListener('click', () => {
    canvas.photos = [
      { url: 'https://cdn.discordapp.com/attachments/696659588791009351/1050185133522686032/his20.jpg', width: 1000, offsetX: 0, offsetY: 0 },
      { url: 'https://cdn.discordapp.com/attachments/696659588791009351/1050185155341467648/his21.jpg', width: 1000, offsetX: 0, offsetY: 0 },
      { url: 'https://cdn.discordapp.com/attachments/696659588791009351/1050185165659455488/his22.jpg', width: 1000, offsetX: 0, offsetY: 0 },
      { url: 'https://cdn.discordapp.com/attachments/696659588791009351/1050185178221391972/his23.jpg', width: 1000, offsetX: 0, offsetY: 0 },
      { url: 'https://cdn.discordapp.com/attachments/696659588791009351/1050185188891697182/his24.jpg', width: 1000, offsetX: 0, offsetY: 0 },
      { url: 'https://cdn.discordapp.com/attachments/696659588791009351/1050185201122299945/his25.jpg', width: 1000, offsetX: 0, offsetY: 0 },
      { url: 'https://cdn.discordapp.com/attachments/696659588791009351/1050185210433646672/his26.jpg', width: 1000, offsetX: 0, offsetY: 0 },
    ];
    fade(canvas.photos[0]);
  });
}

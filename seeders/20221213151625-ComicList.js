'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'comic_lists',
      [
        {
          title: 'Seven to Eternity',
          image: 'https://i.imgur.com/VD3deuGl.jpg',
          link: 'https://imagecomics.com/comics/series/seven-to-eternity',
          publisher: 'Image ',
          genre: 'Dark Fantasy',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          title: 'D4VE',
          image: 'https://i.imgur.com/dKuRwJDl.jpg',
          link: 'https://www.idwpublishing.com/Browse',
          publisher: 'IDW',
          genre: 'Sci-Fi',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Providence',
          image: 'https://i.imgur.com/rZnhIt3l.jpg',
          link: 'https://www.comcav.net/products/providence-compendium-hc-deluxe-set?mc_cid=fe68c4040e&mc_eid=%5Be2bec24e7a%5D',
          publisher: 'Avatar',
          genre: 'Horror',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Black Monday Murders',
          image: 'https://i.imgur.com/vFKI8y2l.jpg',
          link: 'https://imagecomics.com/comics/series/the-black-monday-murders',
          publisher: 'Image',
          genre: 'Horror',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Tokyo Ghost',
          image: 'https://i.imgur.com/9TqKnNcl.jpg',
          link: 'https://imagecomics.com/comics/series/tokyo-ghost',
          publisher: 'Image',
          genre: 'Dark Fantasy',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Wytches',
          image: 'https://i.imgur.com/sNfQFwkl.jpg',
          link: 'https://imagecomics.com/comics/series/wytches',
          publisher: 'Image',
          genre: 'Horror',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'V for Vendetta',
          image: 'https://i.imgur.com/LcjozO1l.jpg',
          link: 'https://www.dc.com/graphic-novels/v-for-vendetta',
          publisher: 'Vertigo',
          genre: 'Crime',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Gideon Falls',
          image: 'https://i.imgur.com/dAlsgCul.jpg',
          link: 'https://imagecomics.com/comics/series/gideon-falls',
          publisher: 'Image',
          genre: 'Horror',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Spawn',
          image: 'https://i.imgur.com/5MeOAAul.png',
          link: 'https://imagecomics.com/comics/series/spawn',
          publisher: 'Image',
          genre: 'Horror',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'American Vampire',
          image: 'https://i.imgur.com/ACOvGgMl.jpg',
          link: 'https://www.dcuniverseinfinite.com/search?q=American%20Vampire&group=comics',
          publisher: 'Vertigo',
          genre: 'Dark Fantasy',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('comic_lists', null, {})
  }
}

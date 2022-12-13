'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'comic_lists',
      [
        {
          title: 'Seven to Eternity',
          image: 'https://imgur.com/GzP8rkr',
          link: 'https://imagecomics.com/comics/series/seven-to-eternity',
          publisher: 'Image Comics',
          genre: 'Dark Fantasy',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'American Vampire',
          image: 'https://i.imgur.com/4Xjk98Ib.jpg',
          link: 'https://www.dcuniverseinfinite.com/search?q=American%20Vampire&group=comics',
          publisher: 'Vertigo',
          genre: 'Dark Fantasy',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'D4VE',
          image: 'https://i.imgur.com/dKuRwJDb.jpg',
          link: 'https://www.idwpublishing.com/Browse',
          publisher: 'IDW',
          genre: 'Sci-Fi',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Providence',
          image: 'https://i.imgur.com/6mAfbFAb.jpg',
          link: 'https://www.comcav.net/products/providence-compendium-hc-deluxe-set?mc_cid=fe68c4040e&mc_eid=%5Be2bec24e7a%5D',
          publisher: 'Avatar',
          genre: 'Horror',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Black Monday Murders',
          image: 'https://i.imgur.com/ZIIrxTbb.jpg',
          link: 'https://imagecomics.com/comics/series/the-black-monday-murders',
          publisher: 'Image',
          genre: 'Horror',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Tokyo Ghost',
          image: 'https://i.imgur.com/9TqKnNcb.jpg',
          link: 'https://imagecomics.com/comics/series/tokyo-ghost',
          publisher: 'Image',
          genre: 'Dark Fantasy',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Wytches',
          image: 'https://i.imgur.com/AnDJkSAb.jpg',
          link: 'https://imagecomics.com/comics/series/wytches',
          publisher: 'Image',
          genre: 'Horror',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'V for Vendetta',
          image: 'https://i.imgur.com/LcjozO1b.jpg',
          link: 'https://www.dc.com/graphic-novels/v-for-vendetta',
          publisher: 'Vertigo',
          genre: 'Crime',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Gideon Falls',
          image: 'https://i.imgur.com/dAlsgCub.jpg',
          link: 'https://imagecomics.com/comics/series/gideon-falls',
          publisher: 'Image',
          genre: 'Horror',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Spawn',
          image: 'https://i.imgur.com/5MeOAAub.png',
          link: 'https://imagecomics.com/comics/series/spawn',
          publisher: 'https://i.imgur.com/FMYbySDt.jpg',
          genre: 'Horror',
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

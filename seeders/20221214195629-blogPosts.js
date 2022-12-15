'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'blog_posts',
      [
        {
          title: 'Alan Moore discusses how he researches his stories',
          image: 'https://i.imgur.com/dkYlJ6qm.jpg',
          description: `Alan Moore’s From Hell is a graphic novel that tells a story about those parts of Victorian London revealed when one looks closely at the case of Jack the Ripper. More specifically, it is about that world before the murders.        
        `,
          link: 'https://www.goodreads.com/book/show/23529.From_Hell',

          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('blog_posts', null, {})
  }
}

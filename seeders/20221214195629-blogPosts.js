'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'blog_posts',
      [
        {
          title: 'Alan Moore discusses how he researches his stories',
          image: 'https://i.imgur.com/YzZKOcFl.jpg',
          description: `Alan Moore’s From Hell is a graphic novel that tells a story about those parts of Victorian London revealed when one looks closely at the case of Jack the Ripper. More specifically, it is about that world before the murders.        
        `,
          link: '@BobbyGoodReads',

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Alan Moore discusses how he researches his stories',
          image: 'https://i.imgur.com/dkYlJ6ql.jpg',
          description: `Alan Moore is a writer from the UK known for iconic comic books like Watchmen and V for Vendetta.        
        `,
          link: '@BobbyGoodReads',

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Batman Beyond would be the next blockbuster hit',
          image: 'https://i.imgur.com/kATh6zkl.jpg',
          description: `Warner Bros needs to stop remaking the same batman movie every 2 years and embrace Terry McGinnis!.        
        `,
          link: '@VertigoMan',

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Wytches may be the best horror comic of all time',
          image: 'https://i.imgur.com/CESS86Ul.jpg',
          description: `The most terrifying comic you've ever read - MTV News`,
          link: '@VertigoMan',

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

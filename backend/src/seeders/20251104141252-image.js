'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Images', [
      // {
      //   entity_type: 'book',
      //   entity_id: 1,
      //   image_url: '/image/books/covers/The_Great_Gatsby.jpg',
      //   image_type: 'cover',
      //   storage_type: 'local',
      //   uploaded_at: new Date(),
      // },
      // {
      //   entity_type: 'book',
      //   entity_id: 3,
      //   image_url: '/image/books/covers/1984.jpg',
      //   image_type: 'cover',
      //   storage_type: 'local',
      //   uploaded_at: new Date(),
      // },
      // {
      //   entity_type: 'book',
      //   entity_id: 4,
      //   image_url: '/image/books/covers/The_Hobbit.jpg',
      //   image_type: 'cover',
      //   storage_type: 'local',
      //   uploaded_at: new Date(),
      // },
      // {
      //   entity_type: 'book',
      //   entity_id: 5,
      //   image_url: '/image/books/covers/Pride_and_Prejudice.jpg',
      //   image_type: 'cover',
      //   storage_type: 'local',
      //   uploaded_at: new Date(),
      // },
      // {
      //   entity_type: 'book',
      //   entity_id: 1,
      //   image_url: '/image/books/gallery/1984_geogre_orwell.jpg',
      //   image_type: 'gallery',
      //   storage_type: 'local',
      //   uploaded_at: new Date(),
      // }
      {
        entity_type: 'book',
        entity_id: 6,
        image_url: '/image/books/covers/Jane_Eyre.jpg',
        image_type: 'cover',
        storage_type: 'local',
        uploaded_at: new Date(),
      },
      {
        entity_type: 'book',
        entity_id: 7,
        image_url: '/image/books/covers/Wuthering_Heights.jpg',
        image_type: 'cover',
        storage_type: 'local',
        uploaded_at: new Date(),
      },
      {
        entity_type: 'book',
        entity_id: 8,
        image_url: '/image/books/covers/Little_Women.jpg',
        image_type: 'cover',
        storage_type: 'local',
        uploaded_at: new Date(),
      },
      {
        entity_type: 'book',
        entity_id: 9,
        image_url: '/image/books/covers/Sense_and_Sensibility.jpg',
        image_type: 'cover',
        storage_type: 'local',
        uploaded_at: new Date(),
      },
      {
        entity_type: 'book',
        entity_id: 10,
        image_url: '/image/books/covers/Anna_Karenina.jpg',
        image_type: 'cover',
        storage_type: 'local',
        uploaded_at: new Date(),
      },
      {
        entity_type: 'book',
        entity_id: 11,
        image_url: '/image/books/covers/Great_Expectations.jpg',
        image_type: 'cover',
        storage_type: 'local',
        uploaded_at: new Date(),
      },
      {
        entity_type: 'book',
        entity_id: 12,
        image_url: '/image/books/covers/The_Picture_of_Dorian_Gray.jpg',
        image_type: 'cover',
        storage_type: 'local',
        uploaded_at: new Date(),
      },
      {
        entity_type: 'book',
        entity_id: 13,
        image_url: '/image/books/covers/Dracula.jpg',
        image_type: 'cover',
        storage_type: 'local',
        uploaded_at: new Date(),
      },
      {
        entity_type: 'book',
        entity_id: 14,
        image_url: '/image/books/covers/The_Secret_Garden.jpg',
        image_type: 'cover',
        storage_type: 'local',
        uploaded_at: new Date(),
      },
      {
        entity_type: 'book',
        entity_id: 15,
        image_url: '/image/books/covers/Tess_of_the_dUrbervilles.jpg',
        image_type: 'cover',
        storage_type: 'local',
        uploaded_at: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Images', null, {});
  }
};

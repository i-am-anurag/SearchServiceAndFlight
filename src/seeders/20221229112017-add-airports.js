'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('airports',[
    {
      name: 'Kempegowda International Airport',
      cityId :7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Bajpe International Airport',
      cityId :7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Hubballi Airport',
      cityId :7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Indara Gandhi International Airport',
      cityId :13,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("products", [
      {
        name: "Doritos",
        date: new Date(2001, 9, 2),
        price: 15,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Banana",
        date: new Date(2002, 5, 7),
        price: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Apple",
        date: new Date(2003, 6, 4),
        price: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Iphone",
        date: new Date(2004, 1, 3),
        price: 11500,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Cheese",
        date: new Date(2005, 2, 2),
        price: 50,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};

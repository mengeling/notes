// "use strict";

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert(
    "Notes",
    [
      {
        title: "Example",
        note: "This is an example note",
        tag: "personal",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Test",
        note: "Writing another test note",
        tag: "work",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {}
  );
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("Notes", null, {});
}

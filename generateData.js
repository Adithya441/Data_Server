const fs = require('fs');
const { faker } = require('@faker-js/faker');

const generateUsers = () => {
  const users = [];
  for (let id = 1; id <= 100000; id++) {
    users.push({
      id: id,
      name: faker.person.fullName(), // Updated to use faker.person
      email: faker.internet.email(),
      address: faker.location.streetAddress(), // Updated to match the latest faker API
      phone: faker.phone.number(), // Updated method for phone numbers
    });
  }
  return { users };
};

const data = JSON.stringify(generateUsers(), null, 2);
fs.writeFileSync('Db.json', data);

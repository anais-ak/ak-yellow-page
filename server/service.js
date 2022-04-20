const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: "secret_v0QfO3wLqtqgKsCzA4RBddQyFxAvTcdduL8op5c6hb2",
});

const personDatabaseId = "1f96e9e031b3451c86aa18de73a2fd62";

const listPeople = async (squadId) => {
  const resp = await notion.databases.query({
    database_id: personDatabaseId,
    filter: {
      property: "Squad",
      relation: {
        contains: squadId,
      },
    },
  });

  var people = [];

  resp.results.forEach((data) => {
    const personData = data.properties;
    // console.log(personData);
    people.push(Person.fromNotionData(personData));
  });

  return people;
};

async function listTribes() {
  const tribes = [
    new Tribe("Ordering XP", [
      new Group(
        "Shipping",
        await listPeople("4fb63ba6-e7d6-435f-a5e4-64a84ead8585")
      ),
      new Group(
        "Fintech",
        await listPeople("9ae8a88c-c05d-4e13-9bd5-a7a768b5c77f")
      ),
      new Group(
        "Order management",
        await listPeople("4cb60d56-0953-4174-8bab-f9e0da02c84a")
      ),
    ]),
    // new Tribe("Growth XP", [new Group("Growth XP")]),
    new Tribe("Brand XP", [
      new Group(
        "Brand Network",
        await listPeople("ab7443ae-2c2e-4e85-b51f-a56962724e00")
      ),
      new Group(
        "Brand Catalog",
        await listPeople("ba9823c2-a6e4-468d-9b7f-a56300dc477b")
      ),
    ]),
    new Tribe("Retailer XP", [
      new Group(
        "Retailer Catalog Browsing",
        await listPeople("c1cf2bfd-6022-4692-8947-f1b0b52f01b4")
      ),
      new Group(
        "Core Retailer XP",
        await listPeople("a4793043-2226-4d20-9a26-a644fd4823c5")
      ),
      new Group("Search", []),
    ]),
    new Tribe("Dev XP", [
      new Group(
        "Data",
        await listPeople("cdad0411-eda6-43a9-a663-cf01d0f91fd3")
      ),
      new Group(
        "Quality",
        await listPeople("3586703b-6367-48ea-8386-e31ed250ca45")
      ),
      new Group(
        "Platform",
        await listPeople("3dc5faf3-9195-4e13-863c-bb2117f74c74")
      ),
    ]),
  ];

  return tribes;
}

class Tribe {
  constructor(name, groups) {
    this.title = name;
    this.groups = groups;
  }
}

class Group {
  constructor(name, people) {
    this.title = name;
    this.people = people;
  }
  static fromNotionData(data) {
    return new Group(data.name);
  }
}

class Person {
  constructor(
    firstName,
    lastName,
    title,
    isCommingSoon,
    location,
    countryEmojy,
    phone,
    funFact,
    favoriteDessert
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
    this.isCommingSoon = isCommingSoon;
    this.location = location;
    this.countryEmojy = countryEmojy;
    this.phone = phone;
    this.funFact = funFact;
    this.favoriteDessert = favoriteDessert;
  }

  static fromNotionData(data) {
    const companyBirthday = new Date(data["Company birthday"].date?.start);
    return new Person(
      data.Firstname?.title[0]?.plain_text,
      data.Lastname.rich_text[0]?.plain_text,
      data.Job.rich_text[0]?.plain_text,
      companyBirthday >= Date.now(),
      data.Location.rich_text[0]?.plain_text,
      data.Country.rich_text[0]?.plain_text,
      data.Phone.rich_text[0]?.plain_text,
      data["Fun Fact"].rich_text[0]?.plain_text,
      data["Favorite Snack"].rich_text[0]?.plain_text
    );
  }
}

module.exports = { listTribes };
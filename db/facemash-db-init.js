facemash = db.getSiblingDB("facemash");
printjson(db.getMongo().getDBNames());

facemash.createUser({
  user: "test",
  pwd: "test",
  roles: [{ role: "readWrite", db: "facemash" }],
});

const initData = JSON.parse(cat("/db/init-data.json", false));
const catsDataValidation = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["id", "url"],
      properties: {
        id: {
          bsonType: "string",
        },
        url: {
          bsonType: "string",
        },
      },
    },
  },
};
facemash.createCollection("cats", catsDataValidation);
facemash.cats.insertMany(initData.images);

const usersDataValidation = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["user", "pwd"],
      properties: {
        user: {
          bsonType: "string",
        },
        pwd: {
          bsonType: "string",
        },
      },
    },
  },
};

facemash.createCollection("users", usersDataValidation);
facemash.users.insertMany([
  {
    user: "user1",
    pwd: hex_md5("user1password"),
  },
  {
    user: "user2",
    pwd: hex_md5("user2password"),
  },
  {
    user: "user3",
    pwd: hex_md5("user3password"),
  },
]);

const catsVersusDataValidation = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["left_cat_id", "rigth_cat_id", "user_id", "vote"],
      properties: {
        left_cat_id: {
          bsonType: "string",
        },
        rigth_cat_id: {
          bsonType: "string",
        },
        user_id: {
          bsonType: "string",
        },
        vote: {
          enum: ["left", "rigth"],
        },
      },
    },
  },
};

facemash.createCollection("catsVersus", catsVersusDataValidation);

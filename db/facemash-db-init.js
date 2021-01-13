facemash = db.getSiblingDB("facemash");
facemash.createCollection("cats");
printjson(db.getMongo().getDBNames());
facemash.createUser({
  user: "test",
  pwd: "test",
  roles: [{ role: "readWrite", db: "facemash" }],
});
let initData = JSON.parse(cat("/db/init-data.json", false));
facemash.cats.insertMany(initData.images);

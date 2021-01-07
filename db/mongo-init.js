facemash = db.getSiblingDB("facemash");
facemash.createCollection("cat");
printjson(db.getMongo().getDBNames());
facemash.createUser({
  user: "test",
  pwd: "test",
  roles: [{ role: "readWrite", db: "facemash" }],
});

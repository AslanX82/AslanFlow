/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("timeRecords");
  
  collection.fields.add(new TextField({
    name: "sessionGoal",
    required: false
  }));
  
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("timeRecords");
  collection.fields.removeByName("sessionGoal");
  return app.save(collection);
})

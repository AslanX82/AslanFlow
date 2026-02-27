/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("timeRecords");
  collection.fields.removeByName("taskId");
  return app.save(collection);
}, (app) => {

  const collection = app.findCollectionByNameOrId("timeRecords");
  collection.fields.add(new TextField({
    name: "taskId",
    required: true,
    min: 0,
    max: 0
  }));
  return app.save(collection);
})

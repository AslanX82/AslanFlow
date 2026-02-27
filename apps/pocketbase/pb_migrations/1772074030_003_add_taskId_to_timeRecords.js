/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const tasksCollection = app.findCollectionByNameOrId("tasks");
  const collection = app.findCollectionByNameOrId("timeRecords");
  
  collection.fields.add(new RelationField({
    name: "taskId",
    required: true,
    collectionId: tasksCollection.id,
    maxSelect: 1
  }));
  
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("timeRecords");
  collection.fields.removeByName("taskId");
  return app.save(collection);
})

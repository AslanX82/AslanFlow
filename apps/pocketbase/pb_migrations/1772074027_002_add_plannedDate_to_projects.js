/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("projects");
  
  collection.fields.add(new DateField({
    name: "plannedDate",
    required: false
  }));
  
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("projects");
  collection.fields.removeByName("plannedDate");
  return app.save(collection);
})

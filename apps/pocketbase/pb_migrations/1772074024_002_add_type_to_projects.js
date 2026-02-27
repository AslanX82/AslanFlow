/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("projects");
  
  collection.fields.add(new SelectField({
    name: "type",
    required: false,
    values: ["project", "task"]
  }));
  
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("projects");
  collection.fields.removeByName("type");
  return app.save(collection);
})

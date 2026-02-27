/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("projects");
  collection.fields.removeByName("updatedAt");
  return app.save(collection);
}, (app) => {

  const collection = app.findCollectionByNameOrId("projects");
  collection.fields.add(new AutodateField({
    name: "updatedAt"
  }));
  return app.save(collection);
})

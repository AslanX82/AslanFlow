/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("tags");
  collection.fields.removeByName("createdAt");
  return app.save(collection);
}, (app) => {

  const collection = app.findCollectionByNameOrId("tags");
  collection.fields.add(new AutodateField({
    name: "createdAt"
  }));
  return app.save(collection);
})

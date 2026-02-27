/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const tagsCollection = app.findCollectionByNameOrId("tags");
  const collection = app.findCollectionByNameOrId("projects");
  
  collection.fields.add(new RelationField({
    name: "tags",
    collectionId: tagsCollection.id,
    maxSelect: 10
  }));
  
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("projects");
  collection.fields.removeByName("tags");
  return app.save(collection);
})

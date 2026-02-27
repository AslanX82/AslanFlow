/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("timeRecords");
  
  collection.fields.add(new NumberField({
    name: "focusLevel",
    required: false,
    min: 1,
    max: 5
  }));
  
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("timeRecords");
  collection.fields.removeByName("focusLevel");
  return app.save(collection);
})

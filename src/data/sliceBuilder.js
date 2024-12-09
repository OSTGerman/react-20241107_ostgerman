import { createSlice } from "@reduxjs/toolkit";

export class SliceBuilder {
  constructor(name, entities) {
    this.name = name;
    this.entities = entities;
    this.defaultState = {};
  }

  withAllEntities() {
    this.defaultState.allEntities = this.entities;
  }

  withAllIds(idPath = "id") {
    this.defaultState.entitiesIds = this.entities.map(
      (entity) => entity[idPath]
    );
    return this;
  }

  withSelectorOptions(idPath = "id", namePath = "name") {
    this.defaultState.entitiesOptions = this.entities.map((entity) => {
      return { id: entity[idPath], name: entity[namePath] };
    });
    return this;
  }

  withEntityById(idPath = "id") {
    this.defaultState.entitiesById = this.entities.reduce(
      (entitiesMap, entity) => {
        entitiesMap[entity[idPath]] = entity;
        return entitiesMap;
      },
      {}
    );
    return this;
  }

  build() {
    const selectors = {};
    this.defaultState.allEntities &&
      (selectors.entities = (state) => state.entities);
    this.defaultState.entitiesIds &&
      (selectors.entitiesIds = (state) => state.entitiesIds);
    this.defaultState.entitiesOptions &&
      (selectors.entitiesOptions = (state) => state.entitiesOptions);
    this.defaultState.entitiesById &&
      (selectors.entityById = (state, id) => state.entitiesById[id]);
    return createSlice({
      name: this.name,
      initialState: this.defaultState,
      selectors,
    });
  }
}

import { uuidT, PropertiesComponent, ActionsComponent, EventsComponent } from "@sinkapoy/home-core";
export interface IWidgetViewModel {
    uuid: uuidT;
    properties: PropertiesComponent;
    actions: ActionsComponent;
    events: EventsComponent;
}
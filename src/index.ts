export { IWidgetViewModel } from "./IWidgetViewModel";
export * from "./WidgetBaseComponent.vue";

class WidgetsIndex {
    typeAlias: Record<string, any> = {};
}

export const widgetsIndex = new WidgetsIndex();

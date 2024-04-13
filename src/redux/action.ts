import { ACTION_1 } from "./constants";

import {
  INSTALLED_APPS_PREV_PAGE,
  INSTALLED_APPS_NEXT_PAGE,
} from "./constants";

export function action1(requiredParameters: any) {
  return {
    type: ACTION_1,
    data: requiredParameters,
  };
}

//

export function installedAppsPrevPage() {
  return {
    type: INSTALLED_APPS_PREV_PAGE,
    data: null,
  };
}

export function installedAppsNextPage() {
  return {
    type: INSTALLED_APPS_NEXT_PAGE,
    data: null,
  };
}

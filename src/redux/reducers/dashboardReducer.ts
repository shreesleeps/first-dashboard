import {
  ACTION_2,
  INSTALLED_APPS_NEXT_PAGE,
  INSTALLED_APPS_PREV_PAGE,
} from "../constants";

const initialState = {
  stateData: "qwerty",
  metrics: [
    {
      label: "Revenue",
      currentValue: 56945,
      previousValue: 25000,
      prefix: "$",
      suffix: "",
    },
    {
      label: "Users",
      currentValue: 76.8,
      previousValue: 80,
      prefix: "",
      suffix: "%",
    },
    {
      label: "New Signups",
      currentValue: 116,
      previousValue: 0,
      prefix: "",
      suffix: "",
    },
    {
      label: "Retention",
      currentValue: 12.67,
      previousValue: 11.8,
      prefix: "$",
      suffix: "",
    },
  ],
  installedApps: {
    data: [
      {
        iconSrc: "/appIcons/zeplin.svg",
        name: "Zepplin",
        amount: 686,
        status: "Active",
        userID: "114423",
        joinedOn: "October",
        group: "Design",
      },
      {
        iconSrc: "/appIcons/figma.svg",
        name: "Figma",
        amount: 864,
        status: "Pending",
        userID: "76223",
        joinedOn: "June",
        group: "Finance",
      },
      {
        iconSrc: "/appIcons/meta.svg",
        name: "Meta",
        amount: 176,
        status: "Cancelled",
        userID: "89453",
        joinedOn: "March",
        group: "Coding",
      },
      {
        iconSrc: "/appIcons/angular.svg",
        name: "Angular",
        amount: 49,
        status: "Active",
        userID: "11467",
        joinedOn: "February",
        group: "Marketing",
      },
      {
        iconSrc: "/appIcons/vue.svg",
        name: "Vue",
        amount: 999,
        status: "Active",
        userID: "67385",
        joinedOn: "October",
        group: "Finance",
      },
      {
        iconSrc: "/appIcons/react.svg",
        name: "React",
        amount: 10,
        status: "Active",
        userID: "323232",
        joinedOn: "March",
        group: "Coding",
      },
    ],
    page: 1,
    size: 5,
  },
};

type Action = {
  type: string;
  data: any;
};

export const dashboardReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ACTION_2:
      return {
        ...state,
        stateData: state.stateData + action.data,
      };
      
    case INSTALLED_APPS_PREV_PAGE:
      return {
        ...state,
        installedApps: {
          ...state.installedApps,
          page: state.installedApps.page > 1 ? state.installedApps.page - 1 : 1,
        },
      };
    case INSTALLED_APPS_NEXT_PAGE:
      return {
        ...state,
        installedApps: {
          ...state.installedApps,
          page:
            state.installedApps.page <
            Math.ceil(
              state.installedApps.data.length / state.installedApps.size
            )
              ? state.installedApps.page + 1
              : Math.ceil(
                  state.installedApps.data.length / state.installedApps.size
                ),
        },
      };
    default:
      return state;
  }
};

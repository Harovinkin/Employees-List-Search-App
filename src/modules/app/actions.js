// Action

export const APP_ACTIONS = {
    APP_FILTER_EMPLOYEES: 'APP_FILTER_EMPLOYEES'
}

// Action creator

export function filterEmployees(filterBy) {
    return {
        type: APP_ACTIONS.APP_FILTER_EMPLOYEES,
        payload: filterBy
    };
}
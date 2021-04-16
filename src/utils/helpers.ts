
export const isEmpty = (data: object) => {

    if (!data) {
        return false;
    }

    if (Array.isArray(data)) {
        return data.length === 0;
    }
    return Object.entries(data).length === 0;
};
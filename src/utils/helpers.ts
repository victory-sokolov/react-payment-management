
export const isEmpty = (data: Object | null): boolean => {

    if (!data) {
        return false;
    }

    if (Array.isArray(data)) {
        return data.length === 0;
    }
    return Object.entries(data).length === 0;
};

export const random = (min: number, max: number): number => Math.floor((Math.random() * max) + min);
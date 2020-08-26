export const createCorn = () => {
    return [
        {
            type: "Corn",
            height: 180,
            output: 6,
            create: createCorn
        },
        {
            type: "Corn",
            height: 180,
            output: 6,
            create: createCorn
        }
    ];
};
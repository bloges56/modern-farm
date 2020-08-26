export const createWheat = () => {
    return{
        type: "Wheat",
        height: 230,
        output: 6,
        create: createWheat
    };
};
export const createAsparagus = () => {
    return {
        type: "Asparagus",
        height: 24,
        output: 4,
        create: createAsparagus
    };
};
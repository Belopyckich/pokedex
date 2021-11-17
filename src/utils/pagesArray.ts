
export const createPagesArray = (pages : number) : number[] =>  {
    const tempArray = [];
    for (let i = 0; i < pages; i++) {
        tempArray.push(i + 1);
    }
    return tempArray;
}
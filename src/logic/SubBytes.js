


//how to chose the number in this table:
//x^2+x+1 
function subBlock(block) {
    let subedblock='';
    for (let i = 0; i < block.length; i++) {
        let temp = Number(block[i]);
        let x = (temp * temp) + temp + 1;
        x = x.toString().padStart(2, 0);
        subedblock+=x;
    }
    return subedblock;
}
const subBlocks = (blocks) => {
    let subedBlocks = [];
    for (const block of blocks) {
        subedBlocks.push(subBlock(String(block)));
    }
    return subedBlocks;
}


module.exports = { subBlocks };

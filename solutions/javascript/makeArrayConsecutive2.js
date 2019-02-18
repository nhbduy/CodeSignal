// https://app.codesignal.com/arcade/intro/level-2/bq2XnSr5kbHqpHGJC

function makeArrayConsecutive2(statues) {
    var max = Math.max(...statues);
    var min = Math.min(...statues);
    
    return (max - min + 1) - statues.length;
}
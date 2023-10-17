for(let i = 0 ; i<10 ; i++){
    let x = i*i + i + 1
    x = x.toString().padStart(2,0);
    console.log(`${i}, ${x}`);
}



let array=['01','03','07','13','21','31','43','57','73','91'];
for(let i=0;i<array.length;i++){
     let temp=array[i];
    if(temp[0]==='0'){
        temp=temp[1];
    }
    temp = (-1 + Math.sqrt(4*temp - 3)) / 2; 
    console.log('temp: ',temp)   
}
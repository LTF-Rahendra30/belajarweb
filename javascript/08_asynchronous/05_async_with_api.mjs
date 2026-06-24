import {readFIle} from 'fs';

readFIle('./mod/simple.txt', (error,data) => {
    if (error){
        console.log(error);
        return;
    }

    const greeting = data.toString()   .replace('%name%', 'Chloe').replace('%your_name','LTF')

    console.log(greeting);
});
// 31/04/2024 - invalid
// 29/02/2001 - invalid
var date = 31;
var month = 4;
var year = 2024;
if(year%400==0 ||(year%4==0 && year%100!=0)){
    if((month==4||month==6||month==9||month==11) &&(date<=30)){
            console.log("valid");
    }
    else if((month==1||month==3||month==5||month==7||month==8||month==10) &&(date<=31)){
            console.log("valid");
        }
    else if((month==2) && (date<=29)){
            console.log("valid");
    }
    else{
        console.log("invalid");
    }
}
else{
    if((month==4||month==6||month==9||month==11) &&(date<=30)){
        console.log("valid");
    }
    else if((month==1||month==3||month==5||month==7||month==8||month==10) &&(date<=31)){
        console.log("valid");
    }
    else if((month==2) && (date<=28)){
        console.log("valid");
    }
    else{
        console.log("invalid");
    }
}
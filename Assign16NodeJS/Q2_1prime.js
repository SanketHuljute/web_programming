// console.log("File name : "+__filename);
// console.log("Dir name : "+__dirname);

// //setInterval(function(){console.log("welcome to server side")}, 1000);

// console.log("Running node app : "+process.pid);
// console.log("node app working directory : "+process.cwd());



exports.isprime = function(num) {
    for(i=2; i<num ; i++)
    {
          flag=true;
        if(num%i==0)
            {
                   flag = false;
                break;
            }
                
    }
    return flag;
    }
    
    exports.calFact = function(num) {
        fact=1;
        while(num>0)
        {
            fact = fact*num;
            num--;
        }
       return fact;
    }
    
    exports.isPerfect = function(num) {
    
    sum=0;
     for(i=1;i<num;i++)
    {
        rem=num%i;
        if(rem==0)
        {
            sum=sum+i;
                    
        }
    }
    if(sum==num)
    return "true";
    else
    return "false";
    }
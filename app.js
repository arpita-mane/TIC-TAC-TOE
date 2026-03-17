
  function asyncFunc1(){

    return new Promise((resolve, reject) => {
       setTimeout(()=>{

        console.log("data1");

        resolve("success");

       },4000);

    });

  }
  function asyncFunc2(){

    return new Promise((resolve, reject) => {
       setTimeout(()=>{

        console.log("data2");

        resolve("success");

       },4000);

    });

  }

  console.log("fetching data1.....");
  asyncFunc1().then((res)=>{
    console.log("fetching data2...")
  });
  asyncFunc2().then((res)=>{

  });


//const getpromise=()=>{

  //  return new Promise((resolve,reject)=>{
    //    console.log("i am promises");
       // resolve("successuful");
      // reject("error");

    //});
//};

//let promise=getpromise();

//promise.then((res)=>{
  //  console.log("promises fulfill",res);
//});


//promise.catch((err)=>{

  //  console.log("rejected",err);
//})


//let promise=new Promise((resolve,reject)=>{

  //  console.log("i am promise");

  //  resolve("sucess");
//});











//function getData(dataId,getNextData){
//    return new Promise((resolve, reject) => {
  //      setTimeout(()=>{

    //    console.log("data",dataId);
      //  resolve("suceess");
        //if(getNextData){
          //  getNextData();
       // }
   // },5000);

    //});

   
//}










//function getData(dataId,getNextData){

//    setTimeout(()=>{

  //      console.log("data",dataId);

    //    if(getNextData){
      //      getNextData();
      //  }
    //},3000);
//}

//getData(1,()=>{

   //getData(2,()=>{
  //     getData(3,()=>{
    //    getData(4);
  //     });
  // });
//});


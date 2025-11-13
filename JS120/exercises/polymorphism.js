

// //before decoupling: 

class Api {
  processApi() {
    console.log('processing api');
  }
}

class Json {
  processJson() {
    console.log('processing json')
  }
}


class Database {
  processData(dataArr) {
    dataArr.forEach(dataType => {
      if (dataType instanceof Api) {
        dataType.processApi();
      } else if (dataType instanceof Json) {
        dataType.processJson();
      }
    })
  }
}

let myDatabase = new Database();

let myDataArr = [new Api(), new Json()];

myDatabase.processData(myDataArr);



//after decoupling: 

class Api {
  processData() {
    return this.processApi();
  }
  
  processApi() {
    console.log('processing api');
  }
}

class Json {
  processData() {
    return this.processJson();
  }
  
  processJson() {
    console.log('processing json')
  }
}


class Database {
  processData(dataArr) {
    dataArr.forEach(dataType => {
      dataType.processData();
    })
  }
}

let myDatabase = new Database();

let myDataArr = [new Api(), new Json()];

myDatabase.processData(myDataArr);


//much  simpler renaming method alternative: 


class Api {
  processData() {
    console.log('processing api');
  }
}

class Json {
  processData() {
    console.log('processing json')
  }
}



class Database {
  processData(dataArr) {
    dataArr.forEach(dataType => {
      dataType.processData();
    })
  }
}

let myDatabase = new Database();

let myDataArr = [new Api(), new Json()];

myDatabase.processData(myDataArr);


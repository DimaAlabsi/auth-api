# auth-api

## Author: Dima Alabsi


## Setup
 .env requirements
* PORT = 8080
## Running the app

* npm run dev

* Endpoint:  **/status** 

    * Returns Object

{



  ***"status": "running",***

  ***"port": 8080***

}


## Tests

* Unit Tests: **npm run test**

## Run

***nodemon index.js***



## Heroku applications 

*   [main branch](https://dimaalabsiauth-api.herokuapp.com/) 
<<<<<<< HEAD
*    
=======
*    https://dimaalabsiauth-api.herokuapp.com
>>>>>>> origin

## Github actions

*    [actions](https://github.com/DimaAlabsi/auth-api/actions)      


## pull request


* [last pull request](https://github.com/DimaAlabsi/auth-api/pull/4)


# dependencies 💯

base-64
bcrypt
cors
dotenv
express
pg
sequelize
sequelize-cli
sqlite3
jest
supertest
jsonwebtoken
 morgan

## UML


![notes](/img/UML.png)



class Node{
  constructor(val){
    this.val=val;
    this.next=null
  }

  const plaindRomeLL=(list)=>{

    let revesefLinkedList= revrse(list);
    while(list && revesefLinkedList){
      if (list.value !== revesefLinkedList.value) return false;
      list=list.next;
      revesefLinkedList=revesefLinkedList.next;
    }
    return true;
  }
  function revrse(node){
    let head= null;
    while(node){
      let List2 = new Node(node.value);
      List2.next=head;
      head=List2'
      node=node.next;
    }
  }
  return head;
}
https://pacific-fortress-67303.herokuapp.com/

### GET all persons
GET https://pacific-fortress-67303.herokuapp.com/api/persons
### GET INFO
GET https://pacific-fortress-67303.herokuapp.com/info
### GET person
GET https://pacific-fortress-67303.herokuapp.com/api/persons/1
### GET undefined
GET https://pacific-fortress-67303.herokuapp.com/api/persons/2000
### DELETE id
DELETE https://pacific-fortress-67303.herokuapp.com/api/persons/73419
### Create ne person
POST https://pacific-fortress-67303.herokuapp.com/api/persons HTTP/1.1
content-type: application/json

{
    "name": "Potato Mate",
    "number": "040-123456"
}
###
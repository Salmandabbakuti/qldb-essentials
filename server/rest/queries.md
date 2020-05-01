##### QLDB-Server CURL Queries

###### 1. Read 
```
#a. Whole Table
curl http://localhost:3000/api/readAll

Sample Response
//[{"Name":"Inception","Rank":34,"Producer":"PeterBurg","Rating":"9.3"},{"Name":"Terminator2","Rank":33,"Producer":"Gale Ann Hurd","Rating":9}]

#b. Search by Field
curl http://localhost:3000/api/search?searchField=Producer&value=Gale+Ann+Hurd

Sample Response
//{"Name":"Terminator2","Rank":33,"Producer":"Gale Ann Hurd","Rating":9}


#c. Search by Id
curl http://localhost:3000/api/searchById?id=8PdWWXJBV5qK8CUqAHm8Oi

Sample Response
//[{"Name":"Terminator2","Rank":33,"Producer":"Gale Ann Hurd","Rating":9,"rid":"8PdWWXJBV5qK8CUqAHm8Oi"}]

```
##### 2. Write

```
curl -d '{"Name":"Inception","Rating":8.9,"Rank":34,"Producer":"PeterBurg"}' -H "Content-Type: application/json" -X POST http://localhost:3000/api/create

Sample Response
//[ { documentId: '5vHoOLTrUhOBF68aX7GRq0' } ]
```
##### 3. Update

```
curl -d '{"field":"Rating","value":9.5,"filterField":"Name","filterValue":"Inception"}' -H "Content-Type: application/json" -X PUT http://localhost:3000/api/update 

Sample Response
//[ { documentId: '5vHoOLTrUhOBF68aX7GRq0' } ]

```

##### 4. Delete

```
curl -d '{"filterField":"Name","filterValue":"Inception"}' -H "Content-Type: application/json" -X DELETE http://localhost:3000/api/delete

```
##### 5. Get Document History
```
curl http://localhost:3000/api/getHistory?filterField=Name&filterValue=Interstellar

Sample Response
//[{"blockAddress":{"strandId":"8vafdai8r4wAImzeGtN4c3","sequenceNo":89},"hash":{"0":33,"1":99,"2":89,"3":50,"4":108,"5":32,"6":84,"7":177,"8":144,"9":136,"10":107,"11":220,"12":198,"13":32,"14":135,"15":55,"16":174,"17":252,"18":82,"19":134,"20":212,"21":192,"22":89,"23":208,"24":2,"25":168,"26":179,"27":88,"28":137,"29":62,"30":80,"31":209},"data":{"Name":"Interstellar","Rating":8.700000000000001,"Rank":32,"Producer":"Christopher Nolan"},"metadata":{"id":"4SnOWJVdiVq6CuL1OrXKS0","version":0,"txTime":"2020-04-26T12:09:46.337Z","txId":"E4y8xhEyjpWE0L4hjqZcGT"}},{"blockAddress":{"strandId":"8vafdai8r4wAImzeGtN4c3","sequenceNo":100},"hash":{"0":10,"1":31,"2":130,"3":252,"4":5,"5":79,"6":181,"7":104,"8":129,"9":33,"10":149,"11":169,"12":125,"13":90,"14":118,"15":93,"16":187,"17":139,"18":15,"19":61,"20":219,"21":102,"22":237,"23":55,"24":237,"25":251,"26":1,"27":62,"28":209,"29":97,"30":122,"31":216},"data":{"Name":"Interstellar","Rank":32,"Producer":"Christopher Nolan","Rating":9},"metadata":{"id":"4SnOWJVdiVq6CuL1OrXKS0","version":1,"txTime":"2020-04-26T12:33:21.146Z","txId":"C6XZxbq4x5j7eTzR0A0DNh"}},{"blockAddress":{"strandId":"8vafdai8r4wAImzeGtN4c3","sequenceNo":143},"hash":{"0":249,"1":52,"2":86,"3":58,"4":136,"5":198,"6":162,"7":175,"8":176,"9":239,"10":251,"11":11,"12":70,"13":24,"14":92,"15":62,"16":87,"17":186,"18":227,"19":65,"20":85,"21":223,"22":116,"23":116,"24":211,"25":89,"26":175,"27":73,"28":177,"29":10,"30":230,"31":87},"data":{"Name":"Interstellar","Rank":32,"Rating":9,"Producer":"Christopher Nolan"},"metadata":{"id":"4SnOWJVdiVq6CuL1OrXKS0","version":2,"txTime":"2020-04-27T06:36:24.222Z","txId":"7NmEGHw8xaqFvKBoiLqlzg"}},{"blockAddress":{"strandId":"8vafdai8r4wAImzeGtN4c3","sequenceNo":82},"hash":{"0":17,"1":114,"2":197,"3":4,"4":168,"5":246,"6":183,"7":181,"8":109,"9":199,"10":120,"11":82,"12":21,"13":81,"14":34,"15":15,"16":177,"17":209,"18":229,"19":56,"20":81,"21":157,"22":255,"23":111,"24":103,"25":184,"26":231,"27":3,"28":117,"29":77,"30":9,"31":143},"data":{"Name":"Interstellar","Rating":8.700000000000001,"Rank":32},"metadata":{"id":"EauI5o2qaYi7m034ROUVL7","version":0,"txTime":"2020-04-26T12:07:16.898Z","txId":"G8ijU8Sx9T891IfbMM11Sq"}},{"blockAddress":{"strandId":"8vafdai8r4wAImzeGtN4c3","sequenceNo":100},"hash":{"0":219,"1":61,"2":210,"3":128,"4":17,"5":227,"6":248,"7":89,"8":139,"9":43,"10":98,"11":226,"12":189,"13":219,"14":204,"15":93,"16":99,"17":14,"18":106,"19":203,"20":163,"21":210,"22":143,"23":169,"24":37,"25":98,"26":91,"27":2,"28":60,"29":133,"30":142,"31":191},"data":{"Name":"Interstellar","Rank":32,"Rating":9},"metadata":{"id":"EauI5o2qaYi7m034ROUVL7","version":1,"txTime":"2020-04-26T12:33:21.146Z","txId":"C6XZxbq4x5j7eTzR0A0DNh"}},{"blockAddress":{"strandId":"8vafdai8r4wAImzeGtN4c3","sequenceNo":143},"hash":{"0":113,"1":156,"2":1,"3":162,"4":161,"5":58,"6":255,"7":232,"8":178,"9":30,"10":161,"11":234,"12":25,"13":96,"14":144,"15":114,"16":183,"17":83,"18":220,"19":98,"20":200,"21":233,"22":105,"23":174,"24":220,"25":207,"26":0,"27":61,"28":174,"29":128,"30":107,"31":79},"data":{"Name":"Interstellar","Rank":32,"Rating":9,"Producer":"Christopher Nolan"},"metadata":{"id":"EauI5o2qaYi7m034ROUVL7","version":2,"txTime":"2020-04-27T06:36:24.222Z","txId":"7NmEGHw8xaqFvKBoiLqlzg"}},{"blockAddress":{"strandId":"8vafdai8r4wAImzeGtN4c3","sequenceNo":160},"hash":{"0":66,"1":44,"2":82,"3":239,"4":183,"5":164,"6":178,"7":27,"8":30,"9":152,"10":62,"11":187,"12":189,"13":138,"14":101,"15":235,"16":241,"17":112,"18":70,"19":252,"20":228,"21":113,"22":66,"23":13,"24":81,"25":156,"26":24,"27":29,"28":49,"29":127,"30":73,"31":236},"data":{"Name":"Interstellar","Rating":8.700000000000001,"Rank":32,"Producer":"Christopher Nolan"},"metadata":{"id":"F6qRDw6b96OINjipjTJWkJ","version":0,"txTime":"2020-04-27T07:35:26.483Z","txId":"HQZ6JQjkwqu7fu8LAawSXX"}},{"blockAddress":{"strandId":"8vafdai8r4wAImzeGtN4c3","sequenceNo":205},"hash":{"0":175,"1":76,"2":202,"3":234,"4":160,"5":152,"6":89,"7":211,"8":151,"9":155,"10":193,"11":66,"12":69,"13":18,"14":178,"15":48,"16":154,"17":212,"18":98,"19":198,"20":168,"21":176,"22":251,"23":195,"24":211,"25":51,"26":36,"27":64,"28":236,"29":44,"30":238,"31":166},"data":{"Name":"Interstellar","Rank":32,"Producer":"Christopher Nolan","Rating":9},"metadata":{"id":"F6qRDw6b96OINjipjTJWkJ","version":1,"txTime":"2020-04-28T10:06:19.328Z","txId":"0VwGWBc6iY89wKsP216z2x"}}]
```

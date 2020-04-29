##### PartiQL-DB Related

###### 1. Create Table:

```
CREATE TABLE <table name>

EX:
CREATE TABLE Movies
```

###### 2. Create Indexes(Column Properties):
```
CREATE INDEX ON <table name> (<property index>)

EX:
CREATE INDEX ON Movies (Name)
CREATE INDEX ON Movies (Producer)
CREATE INDEX ON Movies (Rating)
CREATE INDEX ON Movies (Rank)
```
###### 3. Create Document(Add Data):

```
 INSERT INTO <table name> `<Document JSON>`
 
 EX:
  INSERT INTO Movies `{"Name": "Interstellar","Rating":8.7,"Rank":32,"Producer":"Christopher Nolan"}`
  
  ```
###### 4. Read Document(Table Data):

#Whole Table Data
```
SELECT * FROM <table name>

EX: 
SELECT * FROM Movies

# Search by field property

SELECT FROM * <table name> AS <alias>
WHERE alias.<field name> = <value>

EX:
SELECT * FROM Movies AS m
WHERE m.Name = 'Interstellar' 
//Amazon ION doesn't support double quotes for strings

# Search by document meta id

SELECT * FROM <table name> AS <alias> BY rid 
WHERE rid = '<document id>'
//rid is the default notation for documet id in PartiQL

EX:
SELECT * FROM Movies AS r BY rid
WHERE rid = '8PdWWXJBV5qK8CUqAHm8Oi'
```
###### 5. Update Data:

```
UPDATE <table name> AS <alias>
SET alias.<updating field name> = <value>
WHERE alias.<where to update filed name> = <value>

EX:
UPDATE Movies AS m
SET m.Rating = 9.0
WHERE m.Name='Interstellar'

# Overwrite entire document

UPDATE <table name> AS <alias>
SET <alias> = {
    'FirstName' : 'Rosemarie',
    'LastName' : 'Holloway',
    'DOB' : `1977-06-18T`,
    'GovId' : 'LEWISR261LL',
    'GovIdType' : 'Driver License',
    'Address' : '4637 Melrose Street, Ellensburg, WA, 98926'
}
WHERE alias.FirstName = 'Rosemarie' AND p.LastName = 'Holloway'
```
###### 6. Delete Data(Row):

```
DELETE FROM <table name> AS <alias>
WHERE alias.<where to delete filed name> = <value>

EX:
DELETE FROM Movies AS m
WHERE m.Producer = 'Chirstopher Nolan'
```
##### 7. Delete whole Table:

```
DROP TABLE <table name>

EX:
DROP TABLE Movies
```
 #### PartiQL-Ledger Related
 
 ##### 1. Get Document History:
 ```
 # Whole table documents history
 
 SELECT * FROM history(<tableid>)
 
 EX:
 SELECT * FROM history(Movies)
 
 # Getting required document history
 
 SELECT * FROM history(<table name>) AS <alias>
WHERE alias.metadata.id = '<documentid>'

EX:
SELECT * FROM history(Movies) AS m
WHERE m.metadata.id = '8PdWWXJBV5qK8CUqAHm8Oi'

SELECT * FROM history(Movies) AS m
WHERE m.data.Name = 'Interstellar' //returning history of document with name
 ```
 

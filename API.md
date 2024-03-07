### **GET** _`/chocolates`_ 

- Objetivo: Retornar uma lista com todos os chocolates cadastrados.
- Código HTTP: `200 - OK`;
- Body (exemplo):
```json
  [
    { "id": 1, "name": "Mint Intense", "brandId": 1 },
    { "id": 2, "name": "White Coconut", "brandId": 1 },
    { "id": 3, "name": "Mon Chéri", "brandId": 2 },
    { "id": 4, "name": "Mounds", "brandId": 3 }
  ]
```

### **GET** _`/chocolates/:id`_ 

- Objetivo: Buscar um chocolate específico pelo ID.
- Código HTTP: `200 - OK`;
- Body (exemplo):
```json
  [        
    {
      "id": 4,
      "name": "Mounds",
      "brandId": 3
    }
  ]
```

### **GET** _`/chocolates/brand/:brandId`_ 

- Objetivo: Buscar uma lista de chocolates pelo ID (brandId) da marca.
- Código HTTP: `200 - OK`;
- Body (exemplo):
```json
[
  {
      "id": 1,
      "name": "Mint Intense",
      "brandId": 1
  },
  {
      "id": 2,
      "name": "White Coconut",
      "brandId": 1
  }
]
```

### **POST** _`/chocolates`_ 

- Objetivo: Adiciona um chocolate na base de dados.
- Body da requisição (exemplo):
```json
{ 
  "name": "Mint Not So Intense",
  "brandId": 2
}
```
- Código HTTP: `201 - CREATED`;
- Body da resposta (exemplo):
```json
{ 
  "id": 5,
  "name": "Mint Not So Intense",
  "brandId": 2
}
```
### **DELETE** _`/chocolate/:id`_ 

- Objetivo: Remove um chocolate da base de dados.
- Chocolate existe
  - Código HTTP: `204 - NO CONTENT`;

- Chocolate não existe
  - Código HTTP: `404 - NOT FOUND`;
  - Body da resposta (exemplo):
  ```json
  { 
    "message": "chocolate not found"
  }
  ```

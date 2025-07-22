# vocali-test

Prueba técnica realizada por Cesar Soares Stenico.

## Projeto Full Stack com Docker Compose

Este projeto contém dois serviços principais:

- **Frontend**: Aplicação web (Nuxt 3)
- **Backend**: API (Node.js) com Serverless e Servidor websocket
- **Docker Compose**: Orquestração dos serviços em containers

---

## Estrutura de Pastas

```
.
├── backend/           # Código do backend
│   └── Dockerfile
├── frontend/          # Código do frontend
│   └── Dockerfile
├── docker-compose.yml # Orquestração dos containers
└── README.md
```

---

## Pré-requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Nginx] (https://nginx.org/en/download.html)
- Una cuenta en Speechmatics con clave API
- Credenciais da AWS configuradas

---

## Como rodar o projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-projeto.git
   cd seu-projeto
   ```

2. Suba os containers:

   ```bash
   docker-compose up --build
   ```

3. Inicie as funções lambdas localmente (fora do docker):

   ```bash
   cd backend
   npm install
   npm run serverless-dev
   ```

4. Acesse os serviços:

   - **Frontend:** [http://localhost:3001](http://localhost:3000)
   - **Backend (lambda):** [http://localhost:3000](http://localhost:3000)
   - **Backend (websocket):** [http://localhost:8080](http://localhost:8080)

---

## Comandos úteis

- Subir em segundo plano:

  ```bash
  docker-compose up -d
  ```

- Parar os containers:

  ```bash
  docker-compose down
  ```

- Ver logs:

  ```bash
  docker-compose logs -f
  ```

---

## Variáveis de ambiente

Você pode definir variáveis em arquivos `.env` dentro das pastas `backend/` e `frontend/`.

**Exemplo das variavies necessarias em (`backend/.env.exemple`) e (`fronent/.env.exemple`):**

---

## Observações

- Certifique-se de que as portas **3001** (frontend), **3000** e **8080** (backend) estejam livres.

---

## Licença

MIT

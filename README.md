
# 🛒 IMMA Atacadista — API RESTful (Backend)

API desenvolvida em **Node.js** com **Express** e **MySQL** para o gerenciamento de produtos, pedidos e consulta de CEP do projeto **IMMA Atacadista**.

---

## 🚀 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no backend.
- **Express**: Framework web para criação das rotas e middlewares.
- **MySQL (`mysql2/promise`)**: Banco de dados relacional e driver de conexão assíncrona.
- **CORS**: Liberação de requisições cross-origin.
- **Dotenv**: Gerenciamento de variáveis de ambiente.
- **Nodemon**: Reinício automático do servidor durante o desenvolvimento.
- **Insomnia**: Validação e teste das rotas HTTP.

---

## 🛠️ Funcionalidades e Operações CRUD

A API contempla as operações completas de **Create, Read, Update e Delete (CRUD)** para a entidade de **Produtos**, além de endpoints para **Pedidos** e integração com serviço de **CEP**.

### **Documentação das Rotas — Entidade Produtos**

| Operação | Método HTTP | Rota (Endpoint) | Descrição | Status Esperado |
| :--- | :---: | :--- | :--- | :---: |
| **Create** | `POST` | `/api/produtos` | Cadastra um novo produto no estoque | `201 Created` |
| **Read** | `GET` | `/api/produtos` | Lista todos os produtos cadastrados | `200 OK` |
| **Update** | `PUT` | `/api/produtos/:id` | Atualiza preço, estoque e dados do produto | `200 OK` |
| **Delete** | `DELETE` | `/api/produtos/:id` | Remove um produto do catálogo por ID | `200 OK` |

### **Outras Rotas do Sistema**

- **Status da API:** `GET /api/status` — Verifica a saúde da API.
- **Consulta de CEP:** `GET /api/cep/:cep` — Busca logradouro e cidade via ViaCEP.
- **Pedidos por Cliente:** `GET /api/pedidos/cliente/:cliente_id` — Lista histórico de compras do cliente.
- **Criar Pedido:** `POST /api/pedidos` — Registra novo pedido no sistema.

---

## 📂 Estrutura do Projeto

```text
imma-api/
├── controllers/       # Lógica de controle e regras de negócio (produto, pedido, cep)
├── models/            # Comunicação direta e queries SQL no MySQL
├── routes/            # Definição e mapeamento dos endpoints HTTP
├── db/                # Pool de conexão com o banco de dados MySQL
├── .env.example       # Modelo de variáveis de ambiente
├── .gitignore         # Arquivos ignorados pelo Git (node_modules, .env)
├── package.json       # Dependências e scripts do projeto
├── README.md          # Documentação do repositório
└── server.js          # Ponto de entrada da aplicação Express


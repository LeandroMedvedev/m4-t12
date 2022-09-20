# Regras Rest
1. Client - Server
2. Stateless - Não armazenamos nenhuma informação sobre as requisições.
3. Cache - Nossa aplicação pode conseguir fazer cache
4. Interface Uniforme - Contrato
    - Identificação de recursos - Cada recurso deve ter uma URL coesa
    - Representação dos recursos - JSON, XML, TXT
    - Mensagens auto descritivas - Deve incluir informações suficientes para o cliente saber do que se trata
    - HATEOAS (Hypertext as the engine of application state) - Envio de links para navegação na API

# Verbos HTTP

- GET - LEITURA
- POST - CRIAÇÃO
- PUT - ATUALIZAÇÃO
- DELETE - DELEÇÃO
- PATCH - ATUALIZAÇÃO PARCIAL

# Parametros de requisição

- Header Params
- Query params
- Route Params
- Body Params

# Códigos HTTP

- 1xx - Informativo
- 2xx - Confirmação
- 3xx - Redirecionamento
- 4xx - Erro do cliente
- 5xx - Erro do servidor
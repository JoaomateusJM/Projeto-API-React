# Projeto API React

Este é um projeto educacional desenvolvido como parte do currículo acadêmico da faculdade. A aplicação consiste em um front-end moderno desenvolvido em **React**, cujo principal objetivo é consumir uma API externa (ou local), gerenciar o estado da aplicação dinamicamente e apresentar os dados de forma interativa e responsiva para o usuário.

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias e Stacks Utilizadas](#-tecnologias-e-stacks-utilizadas)
- [Pre-requisitos](#-pre-requisitos)
- [Como Rodar a Aplicação](#-como-rodar-a-aplicação)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Contexto Educacional](#-contexto-educacional)

---

## 💻 Sobre o Projeto

O **Projeto-API-React** foi concebido com o propósito de consolidar conceitos essenciais do ecossistema React. Ele exemplifica o fluxo completo de uma aplicação *Single Page Application* (SPA): desde a renderização de componentes isolados, passando pela realização de requisições HTTP assíncronas, até a manipulação e atualização do estado local da aplicação para refletir as mudanças em tempo real na interface do usuário (UI).

---

## ✨ Funcionalidades

- **Consumo de API RESTful:** Integração completa para busca, envio ou manipulação de dados utilizando métodos HTTP (GET, POST, PUT, DELETE).
- **Gerenciamento de Estado Dinâmico:** Utilização avançada de Hooks do React (`useState`, `useEffect`) para controle de fluxo de dados e renderização condicional.
- **Renderização Reativa:** Atualização instantânea dos componentes na tela assim que os dados da API são processados.
- **Interface Responsiva:** Design adaptável para diferentes tamanhos de tela (Desktops, Tablets e Smartphones).
- **Tratamento de Estados de Loading/Erro:** Indicadores visuais para o usuário enquanto os dados são carregados e feedbacks amigáveis em caso de falhas na comunicação com a API.

---

## 🛠 Tecnologias e Stacks Utilizadas

O projeto foi construído utilizando as seguintes ferramentas e frameworks:

- **[React](https://reactjs.org/):** Biblioteca JavaScript de código aberto focada na construção de interfaces de usuário baseadas em componentes reutilizáveis.
- **JavaScript (ES6+):** Linguagem de programação padrão utilizada para implementar a lógica.
- **[Axios](https://axios-http.com/) / Fetch API:** Cliente HTTP baseado em promessas para realizar chamadas assíncronas assíncronas à API.
- **HTML5 & CSS3:** Estruturação estrutural e estilização dos componentes.
- **Node.js & npm:** Ambiente de execução e gerenciador de pacotes para controle e instalação das dependências do ecossistema.

---

## ⚙️ Pre-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:
- **[Git](https://git-scm.com)** (para clonar o repositório)
- **[Node.js](https://nodejs.org/)** (versão 16.x ou superior recomendada)
- Um gerenciador de pacotes como o **npm** (incluso com o Node) ou **Yarn**.
- Uma IDE de sua preferência, como o **[VS Code](https://code.visualstudio.com/)**.

---

## 🚀 Como Rodar a Aplicação

Siga o passo a passo abaixo para colocar o projeto em execução localmente:

### 1. Clonar o Repositório
Abra o seu terminal e execute o comando abaixo para clonar a branch `caio` do projeto:
```bash
git clone -b caio [https://github.com/JoaomateusJM/Projeto-API-React.git](https://github.com/JoaomateusJM/Projeto-API-React.git)
```

### 2. Acessar a Pasta do Projeto
```bash
cd Projeto-API-React
```

### 3. Instalar as Dependências
```bash
Instale todos os pacotes necessários listados no arquivo package.json:
```

# Utilizando npm
```bash
npm install
```

### 4. Executar o Projeto

Após a instalação das dependências, inicie o servidor de desenvolvimento:

# Utilizando npm
```bash
npm start
```

O servidor será iniciado localmente. Abra o seu navegador e acesse: http://localhost:3000.
📁 Estrutura de Pastas Sugerida

A organização interna do código segue o padrão da comunidade React:
```text
Projeto-API-React/
├── public/          # Arquivos públicos (index.html, favicons, etc.)
├── src/             # Código-fonte da aplicação
│   ├── assets/      # Imagens, mídias e estilos globais
│   ├── components/  # Componentes reutilizáveis da interface
│   ├── services/    # Configuração de chamadas de API (ex: api.js com Axios)
│   ├── views/pages/ # Páginas ou telas principais da aplicação
├── package.json     # Gerenciamento de dependências e scripts do projeto
└── README.md        # Documentação do projeto
```
🎓 Contexto Educacional

Este projeto foi desenvolvido com fins puramente acadêmicos, servindo como critério de avaliação e aprendizado prático sobre o desenvolvimento de aplicações web modernas, modulares e conectadas a serviços em nuvem.

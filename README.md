# Puppeteer

Este projeto é uma POC para fins de estudos onde foi desenvolvido uma arquitetura utilizando puppeteer que é um Chrome Headless executando no backend

## Sumário

- [Puppeteer](#puppeteer)
  - [Sumário](#sum%c3%a1rio)
  - [Introdução](#introdu%c3%a7%c3%a3o)
    - [Principais recursos utilizados](#principais-recursos-utilizados)
    - [Pré-requisitos](#pr%c3%a9-requisitos)
    - [Instalação](#instala%c3%a7%c3%a3o)
  - [Página de teste](#p%c3%a1gina-de-teste)
  - [Testes Unitários](#testes-unit%c3%a1rios)
  - [Recursos da POC](#recursos-da-poc)
  - [Autor](#autor)
  - [License](#license)
  
## Introdução

Nessa seção é descrito as dependências utilizadas na aplicação como um todo, instruções de como iniciar o projeto em modo de desenvolvimento e realização de testes.

### Principais recursos utilizados

- [Node](https://nodejs.org/) - Necessário para o Angular.
- [NPM](https://www.npmjs.com) - Gerenciador de Dependências.
- [Jest](https://jestjs.io/) - Framework de testes, necessário para criação dos specs, contendo spies, stubs, assertions e mais.
- [TypeScript](https://www.typescriptlang.org/) - Superset de JavaScript que traz recursos importantes como tipagem de variáveis e funções, criação de interfaces, enum, generics e compila pra JavaScript. TypeScript traz uma segurança pro desenvolvimento e refatoração de códigos devido aos erros em tempo de compilação
- [Puppeteer](https://github.com/GoogleChrome/puppeteer) - Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol. Puppeteer runs headless by default, but can be configured to run full (non-headless) Chrome or Chromium.

### Pré-requisitos

O que foi necessário para rodar o projeto:

- Node versão v10.14.2
- GIT instalado
- Docker

### Instalação

O processo para rodar o projeto é relativamente fácil.

```
npm install
```

Pra rodar o modo de producão:

```
npm run prod
```

Pra rodar com o Nodemon (modo dev)

```
npm run dev
```

## Página de teste

O processo para rodar o projeto é relativamente fácil.
Entre na pasta page pelo terminal e digite:


```
npm install
```

Pra rodar:

```
npm start
```

## Testes Unitários

Para rodar os testes unitários é necessário dentro do diretório do projeto:

- Instalar as dependências

```
npm install
```

- rodar o comando dentro da pasta do projeto:

```
npm run test
```
## Recursos da POC

- GET /health - Para verificar o status do Servico, nesse endpoint pode ser adicionado chamadas específicas para validar o status.
- GET /api/puppeteer/report - gera relatórios PDF de uma página web
  - Sem parâmetro nenhum é necessário a página de testes (folder page) estar rodando
  - passando queryParam puppeteerUrl é possível gerar PDF de qualquer site
- GET /api/puppeteer/snapshot - gera snapshots de uma página web
  - Sem parâmetro nenhum é necessário a página de testes (folder page) estar rodando
  - passando queryParam puppeteerUrl é possível tirar print de qualquer site

OBS: A página de testes possui CSS próprio de impressão.

## Autor

- **Adrian Lemes Caetano** - [GitHub](https://github.com/adrianlemess)

<a href="https://adrianlemess.github.io">
  <img 
  alt="Imagem do Autor Adrian Lemes" src="https://avatars1.githubusercontent.com/u/12432777?s=400&u=927d77dcc0b02c1ac69360f2194336a2517e6f08&v=4" width="100">
</a>

## License

Esta POC possui Licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para saber mais detalhes.

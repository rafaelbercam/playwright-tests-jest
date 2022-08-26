[![Badge ServeRest](https://img.shields.io/badge/API-ServeRest-green)](https://github.com/ServeRest/ServeRest/)
# __Boilerplate Testes de Front com PlayWright__


## __Pré-requisitos__
1. Instalar o [Node](https://nodejs.org/pt-br/)

## __Ambiente__
Para executar os testes localmente, estou utilizando o ServeRest Front

## Link >>>> [Serverest Front](https://front.serverest.dev/login) <<<<

<p align="center">
 <img alt="Logo do ServeRest" src="https://user-images.githubusercontent.com/29241659/115161869-6a017e80-a076-11eb-9bbe-c391eff410db.png" height="120">
</p>

Link do Repo: https://github.com/ServeRest/ServeRest

 ServeRest está disponível de forma [online](https://serverest.dev), no [npm](https://www.npmjs.com/package/serverest) e no [docker](https://hub.docker.com/r/paulogoncalvesbh/serverest/).

## __Instalando Dependências__
1. Rodar o comando 
```
npm i
```

2. Rodar os testes
```
npm test
````
QA
## __Configuração do Projeto__
### Estrutura de Pastas
O projeto esta dividido da seguinte maneira:

    [playwright-test]
       [src] -> código fonte
            [pages] -> Padrão PageObjects usado no PlayWright
            [fixtures] -> Arquivos de Fixtures
            [__tests__] -> Arquivos de testes usando Jest
            jest.config.js -> Configurações do Jest para execução de testes do PlayWright
            tsconfig.json -> Arquivo de configuração do TypeScript


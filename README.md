# Desafio Minitok - Cleibson Silva

## Objetivo

O objetivo deste projeto é automatizar os testes do site [Sauce Demo](https://www.saucedemo.com/), um e-commerce simulado, utilizando Cucumber e Selenium. A escolha do site se deu pela sua estabilidade, o que permite uma automação mais confiável para testes de fluxo e funcionalidade.

---

## Requisitos

Antes de rodar os testes, certifique-se de que os seguintes componentes estão instalados na sua máquina:

- **ChromeDriver**: Versão compatível com o seu navegador Chrome.
- **Selenium**: Biblioteca para controle do navegador.
- **JavaScript**: Linguagem usada para a automação.
- **Node.js**: Versão 16 ou superior.
- **Cucumber**: Ferramenta para execução dos testes BDD.

---

## Instalação

1. Clone este repositório para o seu espaço de trabalho.
2. Certifique-se de que os requisitos acima estão instalados.
3. Consulte o tutorial para configurar o ambiente e executar os testes:  
   https://github.com/cleibsonsilva94/Test.js/blob/main/SimpleTests/ConfiguringtheEnvironment.md

---

## Comandos para rodar testes

- Rodar todos os testes de uma **feature**:  
  `npx cucumber-js --tags @feature`  
  Exemplo: `npx cucumber-js --tags "@cart"`

- Rodar um teste específico:  
  `npx cucumber-js --tags @TestName`  
  Exemplo: `npx cucumber-js --tags "@invalidLogin"`

---

## Classes

### Features

- **Cart.feature**: `testSaucedemo - Fun/features/Cart.feature`  
  Relacionado aos testes de carrinho executados na página:  
  [https://www.saucedemo.com/cart.html](https://www.saucedemo.com/cart.html)

- **Login.feature**: `testSaucedemo - Fun/features/Login.feature`
  Relacionado aos testes de login executados na página:  
  [https://www.saucedemo.com/](https://www.saucedemo.com/)

### Arquivos de Suporte

- **driver.js**: `testSaucedemo - Fun/features/support/driver.js`  
  Arquivo responsável por gerenciar o WebDriver.

- **xpathsLoginPage.js**: `testSaucedemo - Fun/fatures/support/xpathsLoginPage.js`  
  Arquivo que contém os XPaths utilizados na página de login.

- **xpathsHomePage.js**: `testSaucedemo - Fun/fatures/support/xpathsHomePage.js`  
  Arquivo que contém os XPaths utilizados na página Home.

- **xpathsCartPage.js**: `testSaucedemo - Fun/fatures/support/xpathsCartPage.js`  
  Arquivo que contém os XPaths utilizados na página de carrinho.

- **url.js**: `testSaucedemo - Fun/fatures/support/url.js`  
  Arquivo que armazena as URLs utilizadas nos testes.

### Arquivos de Definições de Etapas

- **Steps.js**: `testSaucedemo - Fun/fatures/step_definitions/Steps.js`  
  Arquivo com configurações globais de etapas.

- **LoginPageSteps.js**: `testSaucedemo - Fun/fatures/step_definitions/LoginPageSteps.js`  
  Arquivo que contém os métodos e funções utilizados na página de login.

- **HomePageSteps.js**: `testSaucedemo - Fun/fatures/step_definitions/HomePageSteps.js`  
  Arquivo que contém os métodos e funções utilizados na página Home.

- **CartPageSteps.js**: `testSaucedemo - Fun/fatures/step_definitions/CartPageSteps.js`  
  Arquivo que contém os métodos e funções utilizados na página de carrinho.
  
---

## Páginas Automatizadas

- [https://www.saucedemo.com/](https://www.saucedemo.com/)
- [https://www.saucedemo.com/inventory.html](https://www.saucedemo.com/inventory.html)
- [https://www.saucedemo.com/cart.html](https://www.saucedemo.com/cart.html)

---

## Testes Automatizados

### Páginas e Funcionalidades Testadas

- **Página de Login**: Testes relacionados ao login do usuário, incluindo validação de credenciais.  
  Página: [Login](https://www.saucedemo.com/)

- **Página de Inventário**: Testes de interação com os produtos disponíveis para compra.  
  Página: [Inventário](https://www.saucedemo.com/inventory.html)

- **Página de Carrinho**: Testes para garantir que a adição e remoção de itens no carrinho funcionam corretamente.  
  Página: [Carrinho](https://www.saucedemo.com/cart.html)

Fiz um vídeo com a execução de alguns testes:  
[Vídeo](https://drive.google.com/file/d/1PuzsLOTloSdSb1WmcZnJfjbn1WDlzdtn/view?usp=drive_link)

---

## Casos de Teste

Os casos de teste podem ser encontrados aqui:  
[Planilha de Casos de Teste](https://docs.google.com/spreadsheets/d/1focNywOuat5Ur9Fx5mTRSOoNEWUPgJA1rcnumEXvnkM/edit?gid=0#gid=0)

---

## Abordagem Seguida para este Desafio

No documento a seguir, são descritos o bug encontrado, as ferramentas utilizadas, os resultados obtidos e uma sugestão de melhoria:  
[Relatório](https://docs.google.com/document/d/11R9qDWBp_lyDS1bh19GtsgswVnnlUOwHzTv4sRuNTAw/edit?usp=drive_link)

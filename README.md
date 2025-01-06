# Desafio Minitok - Cleibson Silva

## Automação

Escolhi para automatizar os testes o site: ([https://www.saucedemo.com/](https://www.saucedemo.com/)) que simula um e-commerce e é mais estável do que um site em produção.

---

## Instalação

Para instalar, você terá que clonar este repositório para seu espaço de trabalho e ter pré-instalado em sua máquina os seguintes componentes:

-**ChromeDriver**
- **Selenium**
- **JavaScript**
- **Node.js**
- **Cucumber** (Metodologia usada nos testes) 

Para um tutorial sobre como instalar o Selenium, Node.js, ChromeDriver, e Cucumber, clique no link: [Configuring the Environment](https://github.com/cleibsonsilva94/Test.js/blob/main/SimpleTests/ConfiguringtheEnvironment.md)

## Classes

- **cart.feature**: `testSaucedemo - Fun\features\cart.feature`  
  Relacionada aos testes de carrinho executados em: [https://www.saucedemo.com/cart.html](https://www.saucedemo.com/cart.html)

- **login.feature**: `testSaucedemo - Fun\features\login.feature`  
  Relacionada aos testes de login executados na página: [https://www.saucedemo.com/](https://www.saucedemo.com/)

- **Steps.js**: `testSaucedemo - Fun\features\step_definitions\Steps.js`  
  Arquivo onde estão os métodos/funções utilizados nos testes.

- **xpaths.js**: `testSaucedemo - Fun\features\support\xpaths.js`  
  Arquivo onde estão os xpaths usados.

---

## Páginas Automatizadas

- [https://www.saucedemo.com/](https://www.saucedemo.com/)
- [https://www.saucedemo.com/inventory.html](https://www.saucedemo.com/inventory.html)
- [https://www.saucedemo.com/cart.html](https://www.saucedemo.com/cart.html)

---

## Testes

- **cart.feature**: `testSaucedemo - Fun\features\cart.feature`  
  Relacionado à página de carrinho: [https://www.saucedemo.com/cart.html](https://www.saucedemo.com/cart.html)

- **login.feature**: `testSaucedemo - Fun\features\login.feature`  
  Relacionado às páginas:  
  - [https://www.saucedemo.com/inventory.html](https://www.saucedemo.com/inventory.html)  
  - [https://www.saucedemo.com/cart.html](https://www.saucedemo.com/cart.html)

---

## Casos de Teste

Os casos de teste podem ser encontrados aqui:  
[Planilha de Casos de Teste](https://docs.google.com/spreadsheets/d/1focNywOuat5Ur9Fx5mTRSOoNEWUPgJA1rcnumEXvnkM/edit?gid=0#gid=0)

---

## Abordagem Seguida para este Desafio

No documento a seguir, são descritos os bugs encontrados, as ferramentas utilizadas e os resultados obtidos:  
[Relatório](https://docs.google.com/document/d/11R9qDWBp_lyDS1bh19GtsgswVnnlUOwHzTv4sRuNTAw/edit?usp=drive_link)

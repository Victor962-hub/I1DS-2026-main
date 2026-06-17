# 👞 Website Institucional

## 📖 Sobre o Projeto

Este projeto consiste no desenvolvimento de um website institucional responsivo para divulgação da empresa, seus produtos, parceiros e informações de contato.

O sistema foi desenvolvido como atividade do curso **Técnico em Desenvolvimento de Sistemas - SENAI Jaú**, aplicando conceitos de:

* HTML5 Semântico
* CSS3
* JavaScript Vanilla
* UX/UI Design
* Responsividade
* Prototipagem com Figma

O objetivo principal é fortalecer a presença digital da empresa, facilitando o acesso dos clientes às informações institucionais, catálogo de produtos e canais de comunicação.

---

# 🎯 Objetivos

* Divulgar os produtos da empresa.
* Facilitar o contato com clientes e parceiros.
* Apresentar informações institucionais.
* Exibir localização e horários de atendimento.
* Melhorar a presença digital da marca.
* Disponibilizar interface moderna e responsiva.

---

# 🖼️ Protótipo

O layout foi desenvolvido previamente no Figma utilizando versões:

* Desktop
* Mobile
* Dark Mode
* Light Mode

### Telas Desenvolvidas

1. Página Inicial
2. Produtos
3. Parceiros
4. Localização
5. Sobre a Empresa
6. Contato

---

# 🚀 Funcionalidades

## RF001 - Página Inicial

* Banner principal
* Destaque de produtos
* Navegação para demais páginas
* Informações institucionais

## RF002 - Redes Sociais

* Acesso direto às redes sociais da empresa

## RF003 - Catálogo de Produtos

* Exibição de produtos
* Organização por categorias
* Imagens ilustrativas
* Informações dos produtos

## RF005 - Sobre a Empresa

* História da empresa
* Missão
* Visão
* Valores
* Equipe

## RF006 - Localização

* Endereço da empresa
* Horários de funcionamento
* Integração com Google Maps

## RF007 - Tema Dark/Light

* Alternância entre modo claro e escuro

## RF008 - Formulário de Contato

* Nome
* E-mail
* Mensagem
* Validação dos campos

## RF009 - Parceiros

* Exibição de parceiros comerciais
* Logos
* Informações básicas
* Links externos

---

# 🏗️ Tecnologias Utilizadas

| Tecnologia | Finalidade                  |
| ---------- | --------------------------- |
| HTML5      | Estrutura do site           |
| CSS3       | Estilização e layout        |
| JavaScript | Interatividade e validações |
| Figma      | Prototipação                |
| Git        | Controle de versão          |
| GitHub     | Hospedagem do código        |

---

# 📂 Estrutura do Projeto

```bash
website-institucional/
│
├── index.html
│
├── pages/
│   ├── produtos.html
│   ├── parceiros.html
│   ├── localizacao.html
│   ├── contato.html
│   └── sobre.html
│
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   ├── darkmode.css
│   │   └── responsive.css
│   │
│   ├── js/
│   │   ├── main.js
│   │   ├── theme.js
│   │   └── validation.js
│   │
│   ├── img/
│   │   ├── logo/
│   │   ├── produtos/
│   │   └── parceiros/
│   │
│   └── icons/
│
└── README.md
```

---

# ⚙️ Como Executar o Projeto

## 1. Clonar o repositório

```bash
git https://github.com/Victor962-hub/I1DS-2026-main/tree/main/Projeto%20Principal
```

## 2. Acessar a pasta

```bash
cd website-institucional
```

## 3. Executar

Abra o arquivo:

```bash
index.html
```

ou utilize a extensão **Live Server** do VS Code.

---

# 🧪 Como Testar

## Teste de Navegação

Verifique:

* Funcionamento do menu principal
* Links internos
* Navegação entre páginas
* Rolagem automática

### Resultado Esperado

Todos os links devem direcionar corretamente para a seção ou página correspondente.

---

## Teste do Tema Dark/Light

1. Clique no botão de alternância de tema.
2. Observe a mudança de cores.
3. Navegue pelas páginas.

### Resultado Esperado

O tema deve alternar corretamente sem comprometer a legibilidade.

---

## Teste Responsivo

Utilize o modo desenvolvedor do navegador:

```text
F12 → Toggle Device Toolbar
```

Testar em:

* Desktop
* Tablet
* Smartphone

### Resoluções recomendadas

```text
1920x1080
1366x768
768x1024
390x844
```

---

## Teste do Formulário

### Cenário 1

Campos preenchidos corretamente.

Resultado esperado:

```text
Mensagem enviada com sucesso.
```

### Cenário 2

Campos vazios.

Resultado esperado:

```text
Preencha todos os campos obrigatórios.
```

---

## Teste dos Produtos

### Cenário 1

Produtos disponíveis.

Resultado esperado:

```text
Exibir imagem e informações do produto.
```

### Cenário 2

Sem produtos cadastrados.

Resultado esperado:

```text
Nenhum produto disponível no momento.
```

---

# 📋 Requisitos Não Funcionais

* HTML5 semântico
* CSS3 puro
* JavaScript Vanilla
* Responsividade
* Compatibilidade com Chrome, Edge e Firefox
* Tempo de carregamento inferior a 5 segundos
* Interface acessível
* Layout baseado no protótipo desenvolvido no Figma

---

# 🔒 Regras de Negócio

### Exibição de Produtos

Caso não existam produtos cadastrados:

```text
Nenhum produto disponível no momento.
```

### Formulário de Contato

Todos os campos devem ser preenchidos corretamente.

Caso contrário:

```text
Preencha todos os campos obrigatórios.
```

### Tema Dark/Light

Ao clicar no botão de tema:

```text
Alternar automaticamente entre modo claro e escuro.
```

---

# 📱 Responsividade

O sistema foi desenvolvido para funcionar corretamente em:

* Computadores
* Tablets
* Smartphones

Garantindo uma experiência consistente em diferentes tamanhos de tela.

---

# 👥 Equipe

### Integrantes

* Luis Filipe Alves
* Ruan Henrique Faria
* Victor Da Silva Do Nascimento

---

# 🎓 Instituição

**SENAI Jaú**

Curso Técnico em Desenvolvimento de Sistemas

Projeto Integrador — Desenvolvimento Front-End

Ano: 2026

---

# 📄 Licença

Projeto desenvolvido exclusivamente para fins educacionais e acadêmicos.

© 2026 - SENAI Jaú

<img width="626" height="619" alt="image" src="https://github.com/user-attachments/assets/786c6ef4-c95a-4e6c-ba14-a36e96153e00" />

---
# 📄 Calculadora de Retorno – Atestados  

Ferramenta simples, rápida e responsiva para calcular automaticamente a **data de retorno de colaboradores** após afastamento por atestado médico.

---

## 📌 Objetivo
Automatizar o cálculo do período de afastamento dos colaboradores, evitando erros manuais e garantindo precisão nas datas de retorno.

---

## 🧮 Como funciona  
O sistema calcula:

- 📅 **Data inicial do atestado**  
- ➕ **Quantidade de dias de afastamento**  
- 🔙 **Data exata de retorno ao trabalho**

O cálculo considera:

- O **primeiro dia** informado como início do afastamento  
- Último dia do atestado = **data inicial + (dias - 1)**  
- Retorno = **último dia + 1**

Exemplo:  
Data inicial: **10/01**  
Dias: **3**  
Afastamento = 10, 11, 12  
➡️ **Retorno = 13/01**

---

## ⚙️ Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**
- 100% executado no navegador — sem backend

---

## 🛠️ Funcionalidades

- 🗓️ Campo nativo de data (UX simples e intuitiva)  
- 🔢 Campo numérico para dias de afastamento  
- 🔁 Botão de reiniciar após o cálculo  
- 🎯 Exibição clara e destacada da data de retorno  
- 📱 Layout moderno, arredondado e responsivo  
- 🇧🇷 Exibição de datas automaticamente no formato brasileiro  
- ❌ Tratamento de erros:
  - Data não informada  
  - Dias inválidos  

---

## 🖼️ Estrutura do Projeto

/
│── index.html # Estrutura da interface
│── style.css # Estilização (UI moderna e responsiva)
│── script.js # Lógica do cálculo
└── logo.png # Logo exibida no topo


---

## ▶️ Como usar

1. Abra o arquivo **index.html** no navegador.  
2. Selecione a **data do atestado**.  
3. Insira a **quantidade de dias**.  
4. Clique em **Calcular retorno**.  
5. Veja a **data calculada** na área de resultado.  
6. Use o botão **Reiniciar** para limpar os campos.

---

## 📦 Hospedagem

Pode ser hospedado facilmente em:

- **Vercel**  
- **GitHub Pages**  
- **Netlify**  
- **Ou localmente**, abrindo o index.html

---

## 🧩 Código Importante (Resumo)

### Lógica principal — `script.js`

- Constrói datas sem interferência de fuso (UTC)  
- Converte automaticamente para formato brasileiro  
- Calcula:
  - Último dia do afastamento  
  - Dia de retorno  

---

## 🎨 Design

- Card oval elegante  
- Inputs responsivos com foco azul  
- Botões modernos com sombra suave  
- Interface totalmente centralizada  

---

## 👩‍💻 Autoria
Desenvolvido por **Mariana Mello**  
📍 Franca – SP  

---

## 📜 Licença
Projeto livre para uso, alteração e distribuição.

---

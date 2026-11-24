# SOSS - Sistema de Orientação para Serviços Sociais (Ceilândia)

> Um guia digital estático, leve e interativo projetado para orientar moradores de Ceilândia no acesso aos serviços do CRAS e CREAS.

---

## 📌 O Problema

A desinformação operacional e a complexidade burocrática geram barreiras críticas no acesso à assistência social. Durante a nossa pesquisa de campo e levantamento de requisitos na comunidade da Ceilândia, identificámos dados alarmantes:
* **70% dos entrevistados** já perderam pelo menos uma viagem a um centro de assistência por erro de endereço ou falta de documentos.
* **mais de 50% da população** possui dúvidas frequentes sobre a separação de competências entre o CRAS e o CREAS.
* **90% dos moradores** localizam-se e guiam-se melhor por pontos de referência populares (como o HRC e a Caixa d'Água) do que pelas siglas oficiais das quadras.

## 💡 A Solução

O **SOSS** foi desenvolvido para mitigar este gargalo de triagem. Trata-se de uma aplicação web mobile-first, leve e estática (100% *client-side*), sem cadastro ou armazenamento das escolhas da pessoa. Não requer banco de dados nem dependências de terceiros para funcionar.

### Principais Funcionalidades:
- **Triagem por necessidade:** A tela inicial oferece caminhos para benefícios e alimentação, situações de violência ou direitos, ou ajuda para escolher um serviço.
- **Informações do atendimento:** Endereço, pontos de referência, horário, telefone e acesso ao Google Maps para os serviços cadastrados.
- **Checklist interativo:** A pessoa pode marcar os documentos que já tem e acompanhar a conferência. Observações distinguem itens opcionais de exigências.
- **Acesso rápido a emergências:** Links para ligar para 190 (Polícia) e 192 (urgência médica) em celulares compatíveis.
- **Acessibilidade:** Navegação por teclado, foco visível, atalho para pular ao conteúdo, zoom móvel liberado e respeito à preferência por movimento reduzido.

## 🚀 Tecnologias Utilizadas

O projeto preza pela máxima performance e custo zero de infraestrutura:
* **HTML5** (Estruturação semântica)
* **CSS3** (Estilização responsiva, sem framework externo)
* **JavaScript (ES6+)** (Navegação entre telas, filtragem de serviços e checklist com dados estáticos no próprio código)

## 🛠️ Como Executar o Projeto

Por ser uma aplicação estática, não é necessário instalar dependências ou configurar servidores backend.

1. Clone o repositório:
   ```bash
   git clone https://github.com/JorgeH-Tec/soss-assistance-guide.git
   ```
2. Abra o ficheiro `index.html` diretamente no navegador ou utilize a extensão *Live Server* no editor.

## 🌍 Link do Projeto Operacional

O deploy do sistema foi realizado de forma automatizada e gratuita através do:
🔗 [CLIQUE AQUI PARA ACESSAR O SOSS](https://jorgeh-tec.github.io/soss-assistance-guide/)

## 👥 Autores (Projeto de Extensão)

Trabalho desenvolvido como Projeto de Extensão no curso de Análise e Desenvolvimento de Sistemas (ADS).

* **Jorge Henrique Paiva Alves** - GitHub: [@JorgeH-Tec](https://github.com/JorgeH-Tec) (Lider do projeto)
* ...

---

<div align="center">
   <h5>
      Nota: Este é um projeto puramente académico e informativo, sem vínculo oficial com a administração do CREAS/CRAS ou com o Governo do Distrito Federal.
   </h5>
</div>

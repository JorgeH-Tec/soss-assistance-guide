# SOSS - Sistema de Orientação para Serviços Sociais (Ceilândia)

> Um guia digital estático, leve e interativo projetado para orientar moradores de Ceilândia no acesso aos serviços do CRAS e CREAS.

---

## 📌 O Problema

A desinformação operacional e a complexidade burocrática geram barreiras críticas no acesso à assistência social. Durante a nossa pesquisa de campo e levantamento de requisitos na comunidade da Ceilândia, identificámos dados alarmantes:
* **70% dos entrevistados** já perderam pelo menos uma viagem a um centro de assistência por erro de endereço ou falta de documentos.
* **mais de 50% da população** possui dúvidas frequentes sobre a separação de competências entre o CRAS e o CREAS.
* **90% dos moradores** localizam-se e guiam-se melhor por pontos de referência populares (como o HRC e a Caixa d'Água) do que pelas siglas oficiais das quadras.

## 💡 A Solução

O **SOSS** foi desenvolvido para mitigar este gargalo de triagem. Trata-se de uma aplicação web mobile-first, ultra leve e estática (100% *client-side*). O sistema funciona sem a necessidade de um banco de dados pesado, garantindo carregamento quase instantâneo mesmo em conexões de dados móveis (3G/4G) instáveis.

### Principais Funcionalidades:
- **Triagem Intuitiva:** Separação clara de serviços (alimentação, benefícios, denúncias) sem termos técnicos complexos.
- **Checklist Interativo de Documentos:** Listagem visual com foco prioritário nos documentos mais esquecidos (comprovante de residência e laudos).
- **Geolocalização por Marcos Populares:** Endereços associados aos pontos de referência mais conhecidos da Ceilândia.

## 🚀 Tecnologias Utilizadas

O projeto preza pela máxima performance e custo zero de infraestrutura:
* **HTML5** (Estruturação semântica)
* **CSS3 / Tailwind CSS** (Estilização responsiva e focada em acessibilidade móvel)
* **JavaScript (ES6+)** (Lógica de filtragem e manipulação de dados via JSON estático)

## 🛠️ Como Executar o Projeto

Por ser uma aplicação estática, não é necessário instalar dependências ou configurar servidores backend.

1. Clone o repositório:
   ```bash
   git clone https://github.com/JorgeH-Tec/soss-assistance-guide.git
2. Abra o ficheiro `index.html` diretamente no seu navegador ou utilize a extensão *Live Server* no seu editor de código.

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

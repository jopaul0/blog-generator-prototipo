# Blog Generator

> Gerador de conteúdo automatizado com IA para o blogs contábeis

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Python](https://img.shields.io/badge/python-3.11%2B-blue)
![Flask](https://img.shields.io/badge/flask-latest-green)
![License](https://img.shields.io/badge/license-MIT-blue)

## Status do Projeto

Este projeto está **em desenvolvimento**. É uma ferramenta interna criada para agilizar a criação de conteúdo técnico contábil, garantindo otimização SEO e estrutura de metadados consistente.

## Demonstração

Confira o vídeo demonstrando a primeira versão funcional do gerador:

🔗 **[Assista ao vídeo no Google Drive](seu-link-aqui)**

---

## Sobre o Projeto

O Blog Generator é uma solução automatizada que transforma temas contábeis complexos em artigos otimizados para SEO. Utilizando Inteligência Artificial (Google Gemini), o sistema gera conteúdo seguindo as diretrizes do RankMath.

### Funcionalidades Principais

- **Persona Senior**: Modelo configurado como redator especializado em contabilidade brasileira
- **Otimização SEO (RankMath)**:
  - Geração automática de Título SEO (máx. 60 caracteres)
  - Meta Descrição otimizada (máx. 160 caracteres)
  - Criação de URL amigável (slug)
  - Posicionamento estratégico da palavra-chave nos primeiros 10% do texto
- **Formatação Rica**: Tabelas em HTML com CSS inline e placeholders para imagens
- **Interface**: UI responsiva estilizada em Vermelho, Preto e Branco com foco em legibilidade

---

## Tecnologias Utilizadas

| Categoria | Tecnologia                              |
|-----------|-----------------------------------------|
| **Backend** | Flask (Python 3.11+)                    |
| **IA** | Google Generative AI (Gemini 2.5 Flash) |
| **Frontend** | HTML5, CSS3, JavaScript Vanilla         |
| **CSS Framework** | Bootstrap 5                             |
| **Containerização** | Docker & Docker Compose                 |

---

## Como Executar o Projeto

### Pré-requisitos

- Docker e Docker Compose instalados
- Chave de API do Google Gemini
- Git

### Passo a Passo

1. **Clone o repositório**

```bash
git clone https://github.com/jopaul0/BlogGenerator.git
cd BlogGenerator
```

2. **Configure as variáveis de ambiente**

Crie um arquivo `.env` na raiz do projeto:

```env
FLASK_ENV=development
FLASK_DEBUG=1
SECRET_KEY=sua_chave_aqui
GOOGLE_API_KEY=sua_chave_aqui
```

3. **Execute com Docker**

```bash
docker-compose up --build
```

4. **Acesse a aplicação**

Abra seu navegador e acesse: `http://localhost:5000`

## 📁 Estrutura de Arquivos

```
BlogGenerator/
├── app/
│   ├── config/
│   │   └── prompt_config.json
│   │   └── gemini_config.json
│   ├── services/
│   │   └── gemini.py             
│   └── static/
│       └── js/
│           └── script.js   
├── docker-compose.yml
├── Dockerfile
├── requirements.txt
├── .env.example
└── README.md
```

### Arquivos Principais

- **`/app/config/prompt_config.json`**: Define a "alma" do redator e as regras de SEO
- **`/app/services/gemini.py`**: Integração com o novo SDK `google-genai`
- **`/app/static/js/script.js`**: Processa o JSON da IA e renderiza o conteúdo na tela

---

## Roadmap

- [ ] Implementar botão de "Copiar para o Clipboard"
- [ ] Adicionar exportação direta para WordPress via API
- [ ] Criar histórico de artigos gerados
- [ ] Sistema de templates personalizados
- [ ] Integração com banco de dados para armazenamento

---

## Autor

Desenvolvido por **João Paulo Santos**
- **LinkedIn**: [João Paulo Santos](https://www.linkedin.com/in/joaosantos02/)
- **Email**: [jopaulo.as8@gmail.com](mailto:jopaulo.as8@gmail.com)
- **GitHub**: [@seu-usuario](https://github.com/jopaul0)

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.


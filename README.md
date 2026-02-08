# Blog Generator

> Protótipo de gerador de conteúdo com IA para blogs contábeis

![Status](https://img.shields.io/badge/status-protótipo-orange)
![Python](https://img.shields.io/badge/python-3.11%2B-blue)
![Flask](https://img.shields.io/badge/flask-latest-green)

## 📌 Sobre o Projeto

**Este é um protótipo desenvolvido como demonstração**. O projeto não está mais em desenvolvimento ativo e foi criado para validar a viabilidade de automatizar a geração de conteúdo contábil otimizado para SEO.

O Blog Generator utiliza IA (Google Gemini) para transformar temas contábeis em artigos formatados seguindo diretrizes do RankMath, com persona especializada em contabilidade brasileira.

## 🎥 Demonstração

🔗 **[Assista ao vídeo da demonstração](https://drive.google.com/file/d/1NzJu_V3RGttPnpC9rdIzfXuDaRsY2qLn/view?usp=sharing)**

---

## ⚙️ Principais Funcionalidades

- Geração automática de Título SEO, Meta Descrição e URL amigável
- Posicionamento estratégico de palavra-chave (primeiros 10%)
- Formatação rica com tabelas HTML e placeholders para imagens
- Interface responsiva em Vermelho, Preto e Branco

## 🛠️ Tecnologias

- **Backend**: Flask (Python 3.11+)
- **IA**: Google Generative AI (Gemini 2.5 Flash)
- **Frontend**: HTML5, CSS3, JavaScript, Bootstrap 5
- **Deploy**: Docker & Docker Compose

## 🚀 Como Executar

### Pré-requisitos
- Docker e Docker Compose
- Chave de API do Google Gemini

### Execução
```bash
# Clone o repositório
git clone https://github.com/jopaul0/BlogGenerator.git
cd BlogGenerator

# Configure o .env com suas chaves
cp .env.example .env

# Execute com Docker
docker-compose up --build

# Acesse: http://localhost:5000
```

---

## 👤 Autor

**João Paulo Santos**

- LinkedIn: [João Paulo Santos](https://www.linkedin.com/in/joaosantos02/)
- Email: jopaulo.as8@gmail.com
- GitHub: [@jopaul0](https://github.com/jopaul0)

---

## 📄 Licença

MIT License

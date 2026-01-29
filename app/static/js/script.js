async function gerarArtigo() {
    const temaInput = document.getElementById('input-tema');
    const btn = document.getElementById('btn-gerar');
    const display = document.getElementById('resultado-artigo');
    
    if (!temaInput.value) {
        alert("Por favor, digite um tema.");
        return;
    }

    // Estado de carregamento
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Gerando...';
    display.style.display = 'none';

    try {
        const response = await fetch('/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ tema: temaInput.value })
        });

        const data = await response.json();

        if (data.error) {
            throw new Error(data.error);
        }

        document.getElementById('seo-title').innerText = data.titulo_seo;
        document.getElementById('seo-desc').innerText = data.meta_descricao;
        document.getElementById('seo-url').innerText = data.url_slug;
        document.getElementById('seo-foco').innerText = data.palavra_foco;

        const tagsContainer = document.getElementById('seo-tags');
        tagsContainer.innerHTML = '';
        data.tags.split(',').forEach(tag => {
            tagsContainer.innerHTML += `<span class="badge bg-secondary seo-badge">${tag.trim()}</span>`;
        });

        document.getElementById('artigo-titulo').innerText = data.titulo_h1;
        document.getElementById('artigo-resumo').innerText = data.resumo;

        let conteudoFormatado = data.conteudo_artigo.replace(
            /\[IMAGEM (\d+)\]/g, 
            '<div class="placeholder-img">📸 Placeholder para Imagem $1</div>'
        );
        
        document.getElementById('artigo-corpo').innerHTML = conteudoFormatado;

        display.style.display = 'block';
        display.scrollIntoView({ behavior: 'smooth' });

    } catch (error) {
        console.error("Erro:", error);
        alert("Ocorreu um erro ao gerar o artigo. Verifique o console.");
    } finally {
        btn.disabled = false;
        btn.innerText = "Gerar Conteúdo";
    }
}
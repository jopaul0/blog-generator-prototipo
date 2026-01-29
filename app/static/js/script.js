document.getElementById('generatorForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const loading = document.getElementById('loading');
    const resultado = document.getElementById('resultado');
    const btn = document.getElementById('btnGerar');
    const formData = new FormData(e.target);

    // Preparar UI
    loading.style.display = 'block';
    resultado.style.display = 'none';
    btn.disabled = true;

    try {
        const response = await fetch('/generate', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        // Popular Ficha Técnica
        document.getElementById('fichaTecnica').innerHTML = `
            <div class="col-md-6 mb-2"><strong>Título:</strong> ${data.titulo}</div>
            <div class="col-md-6 mb-2"><strong>Título SEO:</strong> ${data.titulo_seo}</div>
            <div class="col-md-6 mb-2"><strong>Meta Descrição:</strong> ${data.meta_descricao}</div>
            <div class="col-md-6 mb-2"><strong>Palavra Foco:</strong> ${data.palavra_foco}</div>
            <div class="col-md-6 mb-2"><strong>Palavras-Chave:</strong> ${data.keywords}</div>
            <div class="col-md-6 mb-2"><strong>URL:</strong> /${data.url}</div>
            <div class="col-md-12"><strong>Tags:</strong> ${data.tags}</div>
        `;

        // Popular Artigo
        document.getElementById('conteudoArtigo').innerHTML = data.artigo;

        resultado.style.display = 'block';
    } catch (error) {
        alert('Erro na geração. Verifique o console ou o container Docker.');
        console.error(error);
    } finally {
        loading.style.display = 'none';
        btn.disabled = false;
    }
});
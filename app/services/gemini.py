import json
import os
from google import genai
from app import api_key


def load_data(path):
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)


def build_prompt(theme):
    prompt_info = load_data(os.path.join(os.path.dirname(__file__), '..', 'config', 'prompt_config.json'))

    return f"""
    {prompt_info['persona']}

    Diretrizes: {json.dumps(prompt_info['diretrizes'], ensure_ascii=False)}

    Tarefa: Escreva um artigo completo sobre o tema: "{theme}".

    Formato de Resposta: Retorne EXCLUSIVAMENTE um JSON seguindo exatamente este modelo:
    {json.dumps(prompt_info['output_schema'], indent=2, ensure_ascii=False)}
    """


def generate_content(theme):
    config_data = load_data(os.path.join(os.path.dirname(__file__), '..', 'config', 'gemini_config.json'))
    prompt = build_prompt(theme)

    client = genai.Client(api_key=api_key)

    model_id = config_data['model_name'].replace('models/', '')

    try:
        response = client.models.generate_content(
            model=model_id,
            contents=prompt,
            config=config_data.get('generation_config')
        )
        return response.text
    except Exception as e:
        print(f"Erro na API Gemini: {e}")
        raise e
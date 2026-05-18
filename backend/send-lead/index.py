import os
import json
import urllib.request

def handler(event: dict, context) -> dict:
    """Отправка заявки с сайта в Telegram."""
    cors = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors, 'body': ''}

    body = json.loads(event.get('body') or '{}')
    source = body.get('source', 'Сайт')
    phone = body.get('phone', 'не указан')
    answers = body.get('answers', {})
    messenger = body.get('messenger', '')

    if source == 'quiz':
        lines = ['📋 <b>Новая заявка с квиза</b>\n']
        labels = [
            'Цель покупки',
            'Планировка',
            'Бюджет',
            'Способ связи',
        ]
        for i, label in enumerate(labels):
            vals = answers.get(str(i), [])
            if vals:
                lines.append(f'• {label}: {", ".join(vals)}')
        lines.append(f'• Телефон: +7{phone}')
        text = '\n'.join(lines)
    else:
        lines = ['📞 <b>Новая заявка на консультацию</b>\n']
        if messenger:
            lines.append(f'• Способ связи: {messenger}')
        lines.append(f'• Телефон: +7{phone}')
        text = '\n'.join(lines)

    token = os.environ['TG_BOT_TOKEN']
    chat_id = os.environ['TG_CHAT_ID']

    url = f'https://api.telegram.org/bot{token}/sendMessage'
    payload = json.dumps({
        'chat_id': chat_id,
        'text': text,
        'parse_mode': 'HTML',
    }).encode()

    req = urllib.request.Request(url, data=payload, headers={'Content-Type': 'application/json'})
    with urllib.request.urlopen(req) as resp:
        result = json.loads(resp.read())

    return {
        'statusCode': 200,
        'headers': cors,
        'body': json.dumps({'ok': result.get('ok', False)}),
    }

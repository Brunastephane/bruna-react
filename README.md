# Passo a Passo criar app react(Typescript)

1. Abrir VS Code
2. Abrir Terminal Integrado
3. Digitar <code>"npx create-react-app NOME_DO_APP --template typescript"</code> e pressione ENTER e aguarde o processamento
4. Digite <code>cd NOME_DO_APP</code> e pressione ENTER para acessar a pasta criada
5. Digite <code>npm start</code> e pressione ENTER para inicializar sua aplicação "Hello World"

# Instalar Bootstrap

1. No Terminal integrado digite <code>npm install react-bootstrap bootstrap</code>
2. Quando a instalação finalizar adicione os scripts abaixo no arquivo `public/index.html`:

```
<script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>
```

3. Adicione o import abaixo no arquivo `src/index.tsx`:

```
import 'bootstrap/dist/css/bootstrap.min.css';
```

4. Agora siga a documentação do React Bootstrap para criar seu projeto: [React Bootstrap Documentation](https://react-bootstrap.github.io/components/alerts/)

## Scripts Disponiveis

### `npm start`

Esse comando inicia sua aplicação React no seu ambiente local
Abra [http://localhost:3000](http://localhost:3000) para ver sua aplicação funcionando.

## Aprenda mais

Quer aprender mais sobre a funcao CREATE REACT APP: [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

Quer aprender mais sobre REACT: [React documentation](https://reactjs.org/).

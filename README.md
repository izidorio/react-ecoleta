Este projeto foi ensinado na 1a NLW da [Rocketset](https://rocketseat.com.br/), para vê-lo rodando em sua máquina siga as intruções

- faça o clone do projeto
````
git clone https://github.com/izidorio/react-ecoleta.git
````
 - se tudo deu certo vc terá três pastas
 ````
 react-ecoleta
    |- mobile
    |- server
    |- web   
 ````
- acesse cada pasta e execute o npm install
````
cd mobile 
npm install

cd .. && cd web
npm install

cd .. && cd server
npm install

````
- neste projeto o Knex está configurado para trabalhar com o Sqlite3. confirme se vc possue o sqlite3 instalado em sua máquina ou instale usando o npm
````
sqlite3 --version
# se instalado deverá ter uma saída parecida com isso:
# 3.28.0 2019-04-15 14:49:49 378230ae7f4b721c8b8d83c8ceb891449685cd23b1702a57841f1be40b5daapl

# ou instale  usando o npm

npm i sqlite3
````

- Ainda na pasta server crie o arquivo database.sqlite no diretório server/src/database/
- execute a migrate e seed

````
cd server/src/database
touch database.sqlite

npm run knex:migrate
npm run knex:seed
````
- Se tudo deu certo vc pode levantar o servidor. Ainda na pasta server execute:
````
npm run dev
````
- Execute também a SPA. Acesse o diretório web e rode o comando:
````
cd web
nm run start
````
- Já o mobile foi utilizado o [Expo](https://expo.io/learn)
- confirme se vc possuie o expo instalado
````
expo --version
# se instalalado você terá uma saída semelhante a isso:
# 3.21.5
# ou instale o Expo com o comando:

npm install expo-cli --global
````
- Agora eacesse a pasta mobile execute o expo
````
cd mobile
npm run start
````
- com o Expo client instalado no seu celular abra seu leitor de qrcode e scaneie o qrcode gerado. LEMBRE-SE DE ESTAR NA MESMA REDE

- AJUSTE IMPORTANTE, VC PRECISA ALTERAR O IP apontando para onde o server está rodando. Acesse o arquivo api.ts em: mobile/src/services e altere o IP
````
...
const api = axios.create({
    baseURL:'http://<IP_DO_SERVIDOR>:3333'
})
...
````
- Você precisa fazer o mesmo ajuste no server para as imagens do item 
- acesse ItemsControllers.ts em: server/src/controllers e altere o IP
````
const serializedItems = items.map( item => {
...
return { 
    id: item.id,
    title: item.title,
    image_url: `http://<IP_DO_SERVIDOR>:3333/uploads/${item.image}`
}
...

Para as mudaças entrarem em vigor lembre de reniciar os serviços


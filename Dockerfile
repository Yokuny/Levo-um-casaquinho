# usando uma versão base do node
FROM node:alpine AS builder

# diretório de trabalho do container
WORKDIR /app

# carregando o package.json para npm install
COPY package.json .

# após ter a imagem do node, instala as dependências
RUN npm install

# carregando o projeto para /app
COPY . .

# realizando o build do projeto
RUN npm run build

# expondo a porta 7899
EXPOSE 7899

# disponibilizando o conteúdo da pasta /app/dist para o nginx
# usando uma versão base do nginx
FROM nginx:alpine

# copiando o conteúdo da pasta /app/dist para a pasta /usr/share/nginx/html
COPY --from=builder /app/dist /usr/share/nginx/html

# expondo a porta 7899
EXPOSE 80 

# rodando o nginx
CMD ["nginx", "-g", "daemon off;"]
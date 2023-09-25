# Levo um casaquinho

Construa uma aplicação web simples para exibir informações de previsão do tempo, como temperatura atual, máxima, mínima e previsão para os próximos dias. O layout da aplicação deve seguir o sugerido abaixo:

# Tecnologias utilizadas

- React (Vite)
- Styled Components
- Recharts
- OpenWeatherMap API

# Como rodar o projeto

    # Instalar as dependências
    npm install
<br>

    # Iniciar o servidor de desenvolvimento
    npm run dev
<br>

    # Abrir o aplicativo no navegador
    http://localhost:7899

# Rodar projeto com docker

    # Adquira a imagem do docker
    docker pull yokuny/levo-um-casaquinho
<br>
    
    # Rode o container
    docker run -p 7899:80 yokuny/levo-um-casaquinho
<br>

    # Acesse a aplicação
    http://localhost:7899
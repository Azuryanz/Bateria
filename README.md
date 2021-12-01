<h1 align="center">Bateria</h1>

## Sobre o Projeto
O projeto original é de autoria da B7Web, e a vídeo-aula mostrando como desenvolver o projeto base pode ser encontrada [aqui](https://alunos.b7web.com.br/curso/javascript/projeto-1-bateria).

Apesar de a vídeo-aula ter o foco voltado apra o ensino de JavaScript, por motivos de prática, todo o **HTML** e **CSS** foi desenvolvido por conta própria, apenas visualizando o layout do projeto original.

Além dos elementos desenvolvidos no projeto original, buscou-se ir um pouco mais além, adicionando os seguintes elementos:
- Barra para controle do volume da bateria;
- Distinção de cores para quando a bateria estiver com o som habilitado e mutado (volume zero);
- Um painel lateral com uma versão resumida das informações encontradas aqui.

## Como utilizar
![Bateria](assets/images/bateria.png)

### Abrindo o arquivo
Uma vez que o projeto utiliza apenas de HTML, CSS e JavaScript, basta o usuário abrir o arquivo **index.html** em um navegador, que tela da bateria será carregada.

### Utilizando a bateria
A bateria é composta por nove teclas: *Q*, *W*, *E*, *A*, *S*, *D*, *Z*, *X* e *C*.

Para reproduzir o áudio associado a uma das teclas, o usuário pode:
- Apertar a respectiva tecla em seu teclado;
- Clicar em uma das teclas na tela;

Ao realizar qualquer uma das ações acima, um áudio será reproduzido, e tecla pressionada será brevemente colorida de uma outra cor, dependendo da posição da barra de volume (encontrada acima do teclado da bateria):
- ![#be3c3c](https://via.placeholder.com/15/be3c3c/000000?text=+) `#be3c3c` caso o volume esteja em zero (áudio mutado).
- ![#44d1be](https://via.placeholder.com/15/44d1be/000000?text=+) `#44d1be` caso o volume esteja em qualquer outro valor (áudio habilitado);

### Composição
Logo abaixo da bateria, há um campo de texto em que o usuário pode escrever uma sequência de teclas para ser tocada pela bateria. Ao finalizar a composição, basta o usuário clicar no botão **Tocar** para reproduzí-la.

Há um intervalo de *250ms* entre a reprodução de cada nota, e qualquer caractere que não seja um dos nove presentes no teclado serve apenas para ganhar tempo entre notas válidas.

### Painel lateral
O último elemento do projeto é apenas o botão *clique aqui* que abre  painel lateral. nele, estão contidas as mesmas informações daqui, mas de forma resumida.

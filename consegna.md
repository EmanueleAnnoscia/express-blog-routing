Ciao ragazzi,
esercizio di oggi: **express-blog-routing**
repo: express-blog-routing### 
Esercizio
Iniziate un nuovo progetto, rifacendo i passagi che avete fatto ieri.NB: Lavoriamo su array di oggetti. NON JSON!!!

Usando l'array dei post di ieri le relative immagini, creare un file di routing (`routers/posts.js`) che conterrà le rotte necessarie per l'entità `post`.

All'interno creare le rotte per le operazioni CRUD (*Index, Show, Create, Update e Delete)*Tutte le risposte saranno dei testi che confermeranno l’operazione che il server deve eseguire, secondo le convenzioni REST.
Ad esempio:Se viene chiamata `/posts` col verbo `GET` ci aspettiamo “Lista dei post”;

Se viene chiamato `/posts/1` col verbo `DELETE` ci aspettiamo “Cancellazione del post 1”e via dicendo…Registrare il router dentro `app.js` con il prefisso `posts/`.###
 Bonus
 - Provare a restituire la lista dei post dalla rotta *index*, in formato `json`
- Provare a restituire un singolo post dalla rotta *show,* sempre in formato `json`


<ref *1> ServerResponse {
  _events: [Object: null prototype] { finish: [Function: bound resOnFinish] },
  _eventsCount: 1,
  _maxListeners: undefined,
  outputData: [],
  outputSize: 0,
  writable: true,
  destroyed: false,
  _last: false,
  chunkedEncoding: false,
  shouldKeepAlive: true,
  maxRequestsOnConnectionReached: false,
  _defaultKeepAlive: true,
  useChunkedEncodingByDefault: true,
  sendDate: true,
  _removedConnection: false,
  _removedContLen: false,
  _removedTE: false,
  strictContentLength: false,
  _contentLength: null,
  _hasBody: true,
  _trailer: '',
  finished: false,
  _headerSent: false,
  _closed: false,
  _header: null,
  _keepAliveTimeout: 5000,
  _onPendingData: [Function: bound updateOutgoingData],
  req: IncomingMessage {
    _events: {
      close: undefined,
      error: undefined,
      data: undefined,
      end: undefined,
      readable: undefined
    },


    <ref *2> IncomingMessage {
  _events: {
    close: undefined,
    error: undefined,
    data: undefined,
    end: undefined,
    readable: undefined
  },
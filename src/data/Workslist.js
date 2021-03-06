import Project from "../views/works/Project";

let pathImage="/projectImages";

let worksList=[

    new Project(
      "Escuchando Spotity",
      "Esta aplicación escucha la canción que escuchas en tu Spotify" +
      " y te da la opción de buscar esa canción en youtube. " +
      "También tiene historial.\n" +
      "Una App con kotlin haciendo uso de MVVM, LiveData, Room de Jetpack y por ultimo Kotlin coroutines con retrofit y Room",

      ["Android","Kotlin","MVVM","LiveData",
          "MutableLiveData","Room","Jetpack",
          "Kotlin coroutines",
      ],
      [
          pathImage+"/list/1listeningspotify.jpg",
          pathImage+"/list/2listeningspotify.jpg",
          pathImage+"/list/3listeningspotify.jpg",
          pathImage+"/list/4listeningspotify.jpg",
      ],
      [
          {name:"App Mobil",src:"https://github.com/MichaelPaulHP/"},
          {name:"BackEnd",src:"https://github.com/MichaelPaulHP/"}
      ],
      pathImage+"/list/icon.png",
      pathImage+"/list/video.mp4"
    ),
    new Project(
      "Resolver Sudoku",
      "Una aplicación web hecho con VueJs y Vuetify",
      ["VueJs" ," Vuetify"],
      [pathImage+"/sudoku/home.png"],
      [],
      pathImage+"/sudoku/icon.png",
      pathImage+"/sudoku/video.mp4",
    ),
    new Project(
      "Spotify y YouTube",
      "Este fue mi primera aplicación con Flutter para móvil," +
      " he quedado flipando con BloC(Business Logic Components.) " +
      " porque todo a partir de eventos he logrado manear la UI" +
      " según los estados que emiten cada evento. \n" +
      "Esta es una aplicación te permite buscar o ver video" +
      " de YouTube a partir de una canción que tienes en " +
      "Spotify. Para ello he utilizado la API de Spotify" +
      " y YouTube para obtener las playlists  y buscar" +
      " en YouTube respectivamente.\n",
      ["Flutter","Mobile","BLoC","Spotify API","Spotify Authorization","YouTube Data API",
          "Firebase AUTH","Firebase Cloud Firestore",
      ],
      [
          pathImage+"/sy/1s_and_y.jpg",
          pathImage+"/sy/2s_and_y.jpg",
          pathImage+"/sy/3s_and_y.jpg",
          pathImage+"/sy/4s_and_y.jpg",
          pathImage+"/sy/5s_and_y.jpg",
      ],
      [
          {name:"App Mobil",src:"https://github.com/MichaelPaulHP/"},
          {name:"BackEnd",src:"https://github.com/MichaelPaulHP/"}
      ],
      pathImage+"/sy/icon.png",
      pathImage+"/sy/video.mp4"

    ),
    new Project(
        "Concurrencia",
        "Teniendo conocimientos ya intermedios de Android Java, y" +
        " haber leído Clean Code de Robert C. Martin, Empecé el proyecto con " +
        "dos cosas en mente: Clean code y UnitTest. Lo que quise lograr es una de las" +
        " condiciones para que sea código limpio es el llamado “si pasa todas" +
        " las pruebas, probablemente sea código limpio”, es por ello por lo" +
        " que en el backend utilice por primera vez mocha y Jest en NodeJS." +
        " En la aplicación móvil también traté de hacer pruebas unitarias," +
        " pero fueron muy pocas. En este proyecto tuve la intención" +
        " de hacer un código más legible ",
        ["Android","Java","Firebase Auth","Google Places",
            "MVVM","Data Binding","MapBox","Retrofit","Firebase DB Real Time","SocketIO","NodeJS","API REST",
            "MongoDB","Mongoose","Unit Test","Jest","Mocha","Chai","Clean Code",
        ],
        [
            pathImage+"/c/c_main.jpg",
            pathImage+"/c/c_origin.jpg",
            pathImage+"/c/c_findDest.jpg",
            pathImage+"/c/c_current.jpg",
            pathImage+"/c/c_destin.jpg",
            pathImage+"/c/c_find.jpg",
            pathImage+"/c/c_join.jpg",
        ],
        [
            {name:"App Mobil",src:"https://github.com/MichaelPaulHP/Concurrent"},
            {name:"BackEnd",src:"https://github.com/MichaelPaulHP/concurrentServe"}
        ],
        pathImage+"/c/icon.png"
    ),
    new Project("Home",
        "Lo más importante que aprendí: falta de comunicación" +
        " con el equipo y el ego de algunos participantes da consecuencias" +
        " negativas en un proyecto. Pero tenemos que sacar el lado bueno de" +
        " las cosas, por ello me siento orgulloso de poder decir a mi asistente " +
        "“Wells, apaga las luces” y ver como se apaga el led, como muestra este " +
        "cambio en la aplicación, sin duda algo emocionante. Conociendo el DataBinding " +
        "de Angular busqué algo parecido para Android y es cuando Conocí el Android " +
        "Jetpack y este fue el inicio de otra aventura. ",

        [
            "Android","Java","Firebase Auth","Service","Data Binding",
            "MVVM","MapBox","Retrofit","SocketIO","NodeJS","API REST",
            "Firebase Admin","Python","Raspberry PI","RxPy","Usabilidad","Google Assistant","DialogFlow"
        ],
        [
            pathImage+"/home_white.jpg",
            pathImage+"/home_black.jpg",
            pathImage+"/home_menu.jpg",
            pathImage+"/home_config.jpg",
            pathImage+"/home_info.jpg",
            pathImage+"/home_chat.jpg",
            pathImage+"/home_map.jpg",
            pathImage+"/home_assi.jpg",
            pathImage+"/home_arq.jpg",
        ],
        [
            {name:"BackEnd",src:"https://github.com/MichaelPaulHP/ihomeServe"},
            {name:"App Mobil",src:"https://github.com/MichaelPaulHP/IHome"},
            {name:"Raspberry PI",src:"https://github.com/MichaelPaulHP/ihomeServe"}
        ],
        pathImage+"/icon.png"
    ),
    new Project("Encrypt-Criptografía asimétrica ",
        "Lo más importante fue sockets, fue mi primera vez que he" +
        " utilizado sockets en este caso he utilizado la libreria SocketIO. Es donde aprendí" +
        " la existencia del UIThread porque algunas cosas se tienen que correr en" +
        " el hilo de la interfaz de usuario si estas en otro thread que desea " +
        "cambia la UI, las dificultades en probar la interacción entre" +
        " un emisor y receptor(reconoce al otro usuario, llega un mensaje, envía " +
        "un mensaje,etc) ",
        ["Java","Android","SocketIO","Sockets","NodeJS"],
        [
            pathImage+"/encrypt/encrypt_main.jpg",
            pathImage+"/encrypt/encrypt_userOne.png",
            pathImage+"/encrypt/encrypt_user.jpg",
            pathImage+"/encrypt/encrypt_info.png",
        ],
        [
            {name:"App Mobil",src:"https://github.com/MichaelPaulHP/Encrypt"},
            {name:"BackEnd",src:"https://github.com/MichaelPaulHP/Encrypt"}
            ],
        pathImage+"/mobil.png"
    ),

    new Project(
        "Sistema de Invetario",
        "Un Proyecto Colaborativo donde me he iniciado en VueJS, donde" +
        " he desarrollado un componte que haga CRUD a cualquier tabla maestra " +
        "'<crud><category-form/></crud>', para complementar este componente en el" +
        " backend he implementado un clase llamado 'BaseModel' cuyo método principal" +
        " es 'fillAndSave' encargado de tomar datos, y guardar si son válidos según" +
        " las reglas de validación del modelo que la implemente, también" +
        " un 'Base Controller' que utiliza el 'fillAndSave' del  'Base Model'" +
        " para dar el response correspondiente con su status code. Fue mi primera vez Haciendo Pruebas unitarias, en este caso a controladores",
        [
            "VueJS","CRUD","Modal","Vuelidate","REST API","Laravel","Base CRUD Controller","Base Model","Git","GitHub",
        ],
        [
            pathImage+"/si/si_main.png",
            pathImage+"/si/si_crudMain.png",
            pathImage+"/si/si_modal.png",
            pathImage+"/si/si_edit.png",
            pathImage+"/si/si_delete.png",

        ],
        [
            {name:"Repositorio",src:"https://github.com/DeyvyMY/SICPAV2"},
        ],
        pathImage+"/web.png"
    ),
    new Project(
        "Portafolio",
        "Mi sitio personal es una PWA para dar a conocer mis proyectos," +
        " esta hecho totalmente con VueJS,  con la reutilización de" +
        " componentes de Vuetify  he logrado implementar esta " +
        "aplicación de manera muy rápida, la dificultad que tuve" +
        " fue en el diseño de la UI en como mostrar mis proyectos ",
        [
            "PWA","VueJS","Vuetify","Firebase Analytics","Firebase hosting","Git","GitHub",
        ],
        [
            pathImage+"/portafolio/main.png",
            pathImage+"/portafolio/mainB.png",
            pathImage+"/portafolio/mobil.jpg",
        ],
        [
            {name:"Repositorio",src:"https://github.com"},
        ],
        pathImage+"/portafolio/icon.png"
    ),
];

export default worksList;
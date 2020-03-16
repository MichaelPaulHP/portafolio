import Project from "../views/works/Project";

let pathImage="/projectImages";

let worksList=[
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
        ]
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
            pathImage+"/home_black.jpg",
            pathImage+"/home_white.jpg",
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
        ]
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
            ]
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
        ]
    ),
];

export default worksList;
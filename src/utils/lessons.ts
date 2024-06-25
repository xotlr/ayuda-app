import { FaUser, FaApple, FaBanana, FaOrange, FaHouse, FaSchool, FaCar, FaBook, FaPen, FaCoffee } from "react-icons/fa";

export const lessons = {
  unit1: [
    {
      title: "Lesson 1",
      problems: [
        {
          type: "SELECT_1_OF_3",
          question: "¿Quién es Pedro?",
          answers: [
            { name: "Luis", icon: FaUser },
            { name: "Pedro", icon: FaUser },
            { name: "Ana", icon: FaUser },
          ],
          correctAnswer: 1,
        },
        {
          type: "WRITE_IN_ENGLISH",
          question: "Write 'Adiós' in English",
          correctAnswer: [0, 1],
          answerTiles: ["Goodbye", "Farewell", "Bye"],
        },
        {
          type: "FILL_IN_THE_BLANK",
          question: "Completa la oración: 'Ana ___ en la escuela'",
          sentence: "Ana ___ en la escuela",
          blankIndices: [1],
          answerTiles: ["estudia", "trabaja", "juega"],
          correctAnswer: [0],
        },
        {
          type: "READING_COMPREHENSION",
          question: "¿Qué compró María?",
          passage: "María fue al mercado y compró pan y leche.",
          options: ["Huevos", "Pan y leche", "Manzanas"],
          correctOption: 1,
        },
        {
          type: "MATCHING",
          question: "Empareja las palabras con sus traducciones",
          pairs: [
            { word: "Perro", match: "Dog" },
            { word: "Gato", match: "Cat" },
            { word: "Casa", match: "House" },
          ],
          correctAnswer: [0, 1, 2],
        },
      ],
    },
    {
      title: "Lesson 2",
      problems: [
        {
          type: "SELECT_1_OF_3",
          question: "¿Qué significa 'manzana' en inglés?",
          answers: [
            { name: "Apple", icon: FaApple },
            { name: "Banana", icon: FaBanana },
            { name: "Orange", icon: FaOrange },
          ],
          correctAnswer: 0,
        },
        {
          type: "WRITE_IN_ENGLISH",
          question: "Write 'Gracias' in English",
          correctAnswer: [1],
          answerTiles: ["Please", "Thank you", "Sorry"],
        },
        {
          type: "FILL_IN_THE_BLANK",
          question: "Completa la oración: 'El gato ___ en la casa'",
          sentence: "El gato ___ en la casa",
          blankIndices: [2],
          answerTiles: ["duerme", "corre", "salta"],
          correctAnswer: [0],
        },
        {
          type: "READING_COMPREHENSION",
          question: "¿Dónde está Juan?",
          passage: "Juan está en la biblioteca leyendo un libro.",
          options: ["En la escuela", "En la biblioteca", "En el parque"],
          correctOption: 1,
        },
        {
          type: "MATCHING",
          question: "Empareja las frutas con sus nombres en español",
          pairs: [
            { word: "Apple", match: "Manzana" },
            { word: "Banana", match: "Plátano" },
            { word: "Grape", match: "Uva" },
          ],
          correctAnswer: [0, 1, 2],
        },
      ],
    },
    {
      title: "Lesson 3",
      problems: [
        {
          type: "SELECT_1_OF_3",
          question: "¿Quién es la profesora?",
          answers: [
            { name: "Elena", icon: FaUser },
            { name: "Lucía", icon: FaUser },
            { name: "María", icon: FaUser },
          ],
          correctAnswer: 2,
        },
        {
          type: "WRITE_IN_ENGLISH",
          question: "Write 'Escuela' in English",
          correctAnswer: [2],
          answerTiles: ["House", "Park", "School"],
        },
        {
          type: "FILL_IN_THE_BLANK",
          question: "Completa la oración: 'El niño ___ la puerta'",
          sentence: "El niño ___ la puerta",
          blankIndices: [2],
          answerTiles: ["abre", "cierra", "rompe"],
          correctAnswer: [0],
        },
        {
          type: "READING_COMPREHENSION",
          question: "¿Qué hizo Ana ayer?",
          passage: "Ayer, Ana estudió para su examen y luego fue al cine.",
          options: ["Estudió y fue al cine", "Cocinó y durmió", "Leyó un libro"],
          correctOption: 0,
        },
        {
          type: "MATCHING",
          question: "Empareja los colores con sus nombres en inglés",
          pairs: [
            { word: "Rojo", match: "Red" },
            { word: "Azul", match: "Blue" },
            { word: "Verde", match: "Green" },
          ],
          correctAnswer: [0, 1, 2],
        },
      ],
    },
    {
      title: "Lesson 4",
      problems: [
        {
          type: "SELECT_1_OF_3",
          question: "¿Qué significa 'libro' en inglés?",
          answers: [
            { name: "Book", icon: FaBook },
            { name: "Pen", icon: FaPen },
            { name: "Notebook", icon: FaBook },
          ],
          correctAnswer: 0,
        },
        {
          type: "WRITE_IN_ENGLISH",
          question: "Write 'Comida' in English",
          correctAnswer: [0],
          answerTiles: ["Food", "Drink", "Snack"],
        },
        {
          type: "FILL_IN_THE_BLANK",
          question: "Completa la oración: 'Ella ___ a casa tarde'",
          sentence: "Ella ___ a casa tarde",
          blankIndices: [1],
          answerTiles: ["llega", "sale", "corre"],
          correctAnswer: [0],
        },
        {
          type: "READING_COMPREHENSION",
          question: "¿Qué compró Pablo?",
          passage: "Pablo fue al supermercado y compró frutas y verduras.",
          options: ["Carnes", "Frutas y verduras", "Ropa"],
          correctOption: 1,
        },
        {
          type: "MATCHING",
          question: "Empareja los días de la semana con sus nombres en inglés",
          pairs: [
            { word: "Lunes", match: "Monday" },
            { word: "Martes", match: "Tuesday" },
            { word: "Miércoles", match: "Wednesday" },
          ],
          correctAnswer: [0, 1, 2],
        },
      ],
    },
    {
      title: "Lesson 5",
      problems: [
        {
          type: "SELECT_1_OF_3",
          question: "¿Quién es la hermana de Juan?",
          answers: [
            { name: "Ana", icon: FaUser },
            { name: "Sara", icon: FaUser },
            { name: "Lucía", icon: FaUser },
          ],
          correctAnswer: 2,
        },
        {
          type: "WRITE_IN_ENGLISH",
          question: "Write 'Casa' in English",
          correctAnswer: [1],
          answerTiles: ["School", "House", "Car"],
        },
        {
          type: "FILL_IN_THE_BLANK",
          question: "Completa la oración: 'Ellos ___ juntos'",
          sentence: "Ellos ___ juntos",
          blankIndices: [1],
          answerTiles: ["trabajan", "corren", "estudian"],
          correctAnswer: [0],
        },
        {
          type: "READING_COMPREHENSION",
          question: "¿Dónde vive María?",
          passage: "María vive en un apartamento en el centro de la ciudad.",
          options: ["En el campo", "En el centro de la ciudad", "En una casa grande"],
          correctOption: 1,
        },
        {
          type: "MATCHING",
          question: "Empareja los meses del año con sus nombres en inglés",
          pairs: [
            { word: "Enero", match: "January" },
            { word: "Febrero", match: "February" },
            { word: "Marzo", match: "March" },
          ],
          correctAnswer: [0, 1, 2],
        },
      ],
    },
    {
      title: "Lesson 6",
      problems: [
        {
          type: "SELECT_1_OF_3",
          question: "¿Qué significa 'naranja' en inglés?",
          answers: [
            { name: "Orange", icon: FaOrange },
            { name: "Apple", icon: FaApple },
            { name: "Banana", icon: FaBanana },
          ],
          correctAnswer: 0,
        },
        {
          type: "WRITE_IN_ENGLISH",
          question: "Write 'Perro' in English",
          correctAnswer: [0],
          answerTiles: ["Dog", "Cat", "Bird"],
        },
        {
          type: "FILL_IN_THE_BLANK",
          question: "Completa la oración: 'El hombre ___ rápido'",
          sentence: "El hombre ___ rápido",
          blankIndices: [1],
          answerTiles: ["corre", "salta", "vuela"],
          correctAnswer: [0],
        },
        {
          type: "READING_COMPREHENSION",
          question: "¿Qué hace Carla por la mañana?",
          passage: "Carla se levanta temprano y va al gimnasio.",
          options: ["Se levanta tarde", "Va al gimnasio", "Lee un libro"],
          correctOption: 1,
        },
        {
          type: "MATCHING",
          question: "Empareja los nombres con sus profesiones",
          pairs: [
            { word: "Médico", match: "Doctor" },
            { word: "Ingeniero", match: "Engineer" },
            { word: "Profesor", match: "Teacher" },
          ],
          correctAnswer: [0, 1, 2],
        },
      ],
    },
  ],
};

import { v4 as uuid } from 'uuid';
const data = [
    {
      id: uuid(),
      title: "📝Сделать",
      tasks: [
        {
          id: uuid(),
          title: "Пойти в магаз",
        },
        {
          id: uuid(),
          title: "Задачи",
        },
        {
          id: uuid(),
          title: "Покушать",
        },
      ],
    },
    {
      id: uuid(),
      title: "🚀Проверить",
      tasks: [
        {
          id: uuid(),
          title: "Привет",
        },
        {
          id: uuid(),
          title: "Как дела",
        },
      ],
    },
    {
      id: uuid(),
      title: "🌳Сделано",
      tasks: [
        {
          id: uuid(),
          title: "Случайно",
        },
      ],
    },
  ];
  
  export default data;
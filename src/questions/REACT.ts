import {v1} from 'uuid';

export const REACT = [
    {
        id: v1(),
        question: 'Отличие React от Angular',
        answer: 'React-это библиотека т.к нужно доустанавливать Роутинг, Редакс  и т.д по выбору. Angular-фреймворк, т.к доустанавливать ничего не надо.'
    },
    {
        id: v1(),
        question: 'Зачем нужен React?',
        answer: 'React-нужен для эффективной отрисовки страницы приложения, для этого у него есть Виртуальный DOM. Виртуальный ДОМ  сравнивается с ДОМом Браузера, если есть различия –заменяется. Перерисовка происходит не всей страницы, а конкретного узла, в котором найдены различия.'
    },
    {
        id: v1(),
        question: 'Что происходит после старта React приложения?',
        answer: '1. Запускаются наши функциональные компоненты 2. Функциональные компоненты возвращают JSX 3. Создается объект Virtual DOM 4.На основании Virtual DOM отрисовывается DOM'
    },
    {
        id: v1(),
        question: 'Что происходит после изменения UI',
        answer: '1. Запускаются наши функциональные компоненты 2. Функциональные компоненты возвращают JSX 3. JSX через Babel преобразуется в JS ES5 4. Создается новый объект Virtual DOM 5. Старый Virtual DOM сравнивается со старым 6. Срабатывает алгоритм сравнения, вычисляется разница 7.Измененный узел идет в DOM и только потом он перерисовывается'
    },
    {
        id: v1(),
        question: 'Что такое компонент?',
        answer: 'Компонент-это функция принимающая пропсы и возвращающая jsx разметку. Состоит из двух частей - над return код, функционал, снизу разметка.'
    },
    {
        id: v1(),
        question: 'Отличие элемента от компоненты',
        answer: 'Отличие элемента от компоненты: элемент - это что-то простейшее (к примеру, тэг h1 В который завернута строка h1), а компонент - это часть целого, т.е. функция, которая возвращает элементы.'
    },
    {
        id: v1(),
        question: 'Что такое Стор?',
        answer: 'Стор-это глобальный объект, в котором находится state, getState, dispatch. Методы объекта Стора: GetState -дай стейт. Dispatch-вызывает изменения в стейте.'
    },
    {
        id: v1(),
        question: 'Что такое Props?',
        answer: 'Props-это объект (вспомни как мы ее типизируем).'
    },
    {
        id: v1(),
        question: 'Что такое Хуки?',
        answer: 'Хуки — это функции, с помощью которых вы можете «подцепиться» к состоянию и методам жизненного цикла React из функциональных компонентов. Правила использования hook-ов: нельзя использовать в  массивах, условиях, циклах-если там будет меняться кол-во элементов. UseState- возвращает значение с состоянием и функцию для его обновления. Работает асинхронно.'
    },
    {
        id: v1(),
        question: 'Что такое ХОК',
        answer: 'Hight Order Component(Компонент Высшего Порядка). Это функция которая принимает компонент, а возвращает компонент с добавленой функциональностью'
    },
    {
        id: v1(),
        question: 'Что такое UseEffect?',
        answer: 'Хук, который следит за жизненным циклом функции: включилась, отработала,  и очистилась, чтобы не занимать ресурсы.  Сработает после отрисовки страницы, чтобы не тормозить приложение. Обычно берет значение из UseState единожды и использует его (замыкание). Первым параметром принимает колбэк, в котором мы будем делать сайдЭффекты, а вторым параметром принимает массив зависимостей. Если не поставить вторым параметром []-то он будет каждый раз вызываться. Пустой []-отработает единожды, когда компонента вмонтируется в DOM. Если укажем зависимость в массиве, скажем [state], то как только произойдут изменения в стейте, тут же сработает. '
    },
    {
        id: v1(),
        question: 'Что такое useMemo, useCallBack(обворачиваем колбэк)?',
        answer: 'Эти хуки оптимизируют  перерисовку узлов, путем запоминания функции.'
    },
    {
        id: v1(),
        question: 'Итого: Пользователь что-то сделал и что потом?',
        answer: 'Выполнилась функция - поменялся стейт -вернулся новый JSX - создался новый Виртуал дом (объект) - сравнился при помощи встроенных алгоритмов со старым Витруал домом (объект) - и наконец, происходит перерисовка ДОМа (объект), но не всего, а конкретного узла, где были изменения. Старый Виртуальный Дом удаляется сборщиком мусора т.к. на него больше нет ссылок.'
    },
    {
        id: v1(),
        question: 'Условия для перерисовки компонентов',
        answer: '1. Изменение стейтовб 2.Изменение пропсов 3.Изменение родителя'
    },
]



/// <reference types="cypress" />
import {
    addSystem,
    printPlanets,
    radiusSum,
    filterDistance,
    deletePlanetByIndex,
    sortByRadius,
    sortByName
} from "../utils/arrayMethods";

describe('planetsArray', () => {
    before(() => {
        cy.fixture('planets').then(planets => {
            cy.wrap(planets).as('planetsList')
        })
    })

    it('planetsArray', () => {

        /*Задание 1
        Реализуйте метод printPlanets для вывода данных по объекту из массива. Используйте его для вывода данных
        по массиву, чтобы убедиться, что преобразования массива были произведены верно. В идеале имплементация данного
        метода должна быть гибкой. Поскольку значений у нас немного, то можно выводить из так:
        cy.log(`planet: ${planet.name}, radius: ${planet.radius}, density: ${planet.density}, distance:  ${planet.distance}`)
        Но дальше нужно этот способ вывод усовершенствовать. Этот способ не будет в полной мере работать,
        когда количество полей для planet увеличится.
        */
        cy.get('@planetsList').then((planetsList) => {
            cy.log('PrintPlanets')
            let planetsArray = []
            planetsArray.push(...planetsList['newPlanet'])

            printPlanets(planetsArray)

            /*Задание 2
            Добавьте свойство solarSystem для всех объектов в массива. Используйте метод map().
            Итак, стандартная имплементация по выводу значений из массива теперь должна включать вывод еще одного свойства.*/
            cy.log('Solar system added')
            addSystem(planetsArray)

            /*Задание 3
            Добавьте в массив новый объект:
            {planet: "SomeNewPlanet", radius: 24764, density: 1.64, distance: 30.07, solarSystem: false}*/
            // cy.get('@newPlanet').then((newPlanet) => {
            cy.log('New object added')
            cy.fixture('newPlanet').then(newPlanet => {
                cy.log('New object added')
                planetsArray.push(newPlanet)

                console.log('\r')
                console.log('New planet was added')
                printPlanets(planetsArray);

                /*Задание 4
                Просуммируйте радиус всех планет, используя метод reduce.*/
                cy.log('Sum radius of the planets')
                radiusSum(planetsArray)

                /*Задание 5
                Используя метод filter распечатайте только те планеты, расстояние до которых больше определенного значения,
                например пяти. Реализация должна позволять делать однострочный вызов.
                cy.log("====Planets with distance > 5 ====")
                printPlanets(getPlanetsWithDistance(planets, 5))*/
                cy.log('FilterPrint by distance')
                filterDistance(planetsArray)

                /*Задание 6
                Удалите из массива данные по планете с именем SomeNewPlanet
                Используйте метод indexOf, чтобы найти нужную планету в массиве, и метода splice, чтобы удалить найденный элемент.*/
                cy.log('Delete someNewPlanet')
                deletePlanetByIndex(planetsArray)

                /* Задание 7
                 Реализуйте функцию, которая отсортирует планеты по радиусу (по убыванию или возрастанию на выбор).
                 Используйте метод sort().*/
                cy.log('Sort planets by radius')
                console.log('Planets are sorted by radius: ')
                sortByRadius(planetsArray)

                /*Задание 8
                Реализуйте функцию, которая отсортирует планеты по имени. Используйте метод sort().*/
                cy.log('Sort planets by name')
                console.log('Planets are sorted by name: ')
                sortByName(planetsArray)

                /*Задание 9
                Выведем в консоль длину массива (свойство length)*/
                cy.log('Print array length')
                console.log('The array length is: ')
                console.log(planetsArray.length);
            })
        })
    })
});
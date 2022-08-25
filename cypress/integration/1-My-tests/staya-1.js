describe('Тестирование staya', function () {
    
    //it('Проваливаюсь в категорию поводки и ищу совпадение с названием Heatwave', function () {
    //    cy.visit('https://staya.dog/');
    //    cy.contains('input', 'Поводки').click();
    //    cy.contains('Heatwave');
    //    cy.end();
    //     })

     it('Проверяю, что логин работает и после логина на странице есть слово Мои заказы', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click(); // кнопка Вход
        cy.get('.auth-form > form > [type="email"]').type('valiamat123@gmail.com'); // вводим почту
        cy.get('.auth-form > form > [type="password"]').type('qwerty');
        cy.get('.auth-form__submit').click();
        cy.contains('Мои заказы');
        })
})

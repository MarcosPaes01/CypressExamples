describe('To-Do API Tests', () => {
    const baseUrl = 'https://www.saucedemo.com';
  
    it('GET', () => {
      cy.request('GET', baseUrl).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
        expect(response.body.length).to.be.greaterThan(0);
      });
    });
  
    it('POST', () => {
      cy.request('POST', `${baseUrl}/1`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', 1);
        expect(response.body).to.have.property('title');
      });
    });
  
    it('Should create a new task', () => {
      const newTask = {
        title: 'Learn Cypress',
        completed: false,
        userId: 1,
      };
  
      cy.request('POST', baseUrl, newTask).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('id'); // Mock API returns a new ID
        expect(response.body).to.include(newTask);
      });
    });
  
    it('Should update an existing task', () => {
      const updatedTask = {
        title: 'Learn Cypress (Updated)',
        completed: true,
        userId: 1,
      };
  
      cy.request('PUT', `${baseUrl}/1`, updatedTask).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.include(updatedTask);
      });
    });
  
    it('Should delete a task', () => {
      cy.request('DELETE', `${baseUrl}/1`).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });
  
const skills = [
    {skill: 'Javascript', done: true},
    {skill: 'HTML', done: true},
    {skill: 'CSS', done: true},
    {skill: 'React', done: false},
    {skill: 'Python', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };

  function getOne(id) {
      return skills[id];
  }
  
  function getAll() {
    return skills;
  }
const skills = [
    {skill: 'Javascript', done: true},
    {skill: 'HTML', done: true},
    {skill: 'CSS', done: true},
    {skill: 'React', done: false},
    {skill: 'Python', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };

  function deleteOne(id) {
      skills.splice(id, 1);
  }

  function create(skill) {
      skills.push(skill);
  }

  function getOne(id) {
      return skills[id];
  }
  
  function getAll() {
    return skills;
  }


class Project{
  constructor(title,description,tools,imagesSrc,repositories,icon) {
      this.title=title;
      this.description=description;
      this.tools=tools;
      this.imagesSrc=imagesSrc;
      this.repositories=repositories;
      this.icon=icon;
  }
}
module.exports=Project;
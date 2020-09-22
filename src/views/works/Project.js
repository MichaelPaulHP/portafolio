

class Project{
  constructor(title,description,tools,imagesSrc,repositories,icon,video=null) {
      this.title=title;
      this.description=description;
      this.tools=tools;
      this.imagesSrc=imagesSrc;
      this.repositories=repositories;
      this.icon=icon;
      this.video=video;
  }
}
module.exports=Project;
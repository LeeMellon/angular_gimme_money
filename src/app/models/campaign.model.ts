export class Campaign{
  constructor(
    public title: string,
    public total: number,
    public current: number = 0,
    public tagline: string = "tagline",
    public image: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm3vfO69bMJjV5Se6awaC6Dzgh0L9g3lAiw0a2QnoLg1aBGd2RDw",
    public location: string = "Location",
    public category: string = "Category",
    public tags: string[] = [''],
    public duration: string = "Durration",
    public story: string = "Story",
    public perks: string = "Perks"
    ){

    }
}

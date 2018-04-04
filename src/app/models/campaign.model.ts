export class Campaign{
  constructor(
    public title: string,
    public total: number,
    public tagline: string = " ",
    public image: string = " ",
    public location: string = " ",
    public categotry: string = " ",
    public tags: string[] = [],
    public duration: string = " ",
    public story: string = " ",
    public perks: string = " "
    ){

    }
}

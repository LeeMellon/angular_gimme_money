export class Campaign{
  public tagline: string
  public image: string
  public location: string
  public categotry: string
  public tags: string[]
  public duration: Date
  public story: string
  public perks: string
  constructor(
    public title: string,
    public total: number,
    ){}
}
